const admin = require("firebase-admin");
const hubspot = require("@hubspot/api-client");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const ALLOWED_ORIGINS = new Set(["https://thelingolegacy.com", "https://www.thelingolegacy.com"]);

function response(statusCode, body, origin) {
  const headers = { "Content-Type": "application/json", "Vary": "Origin" };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Headers"] = "Authorization,Content-Type";
    headers["Access-Control-Allow-Methods"] = "POST,OPTIONS";
  }
  return { statusCode, headers, body: JSON.stringify(body) };
}

exports.handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || "";
  if (event.httpMethod === "OPTIONS") return response(204, {}, origin);
  if (event.httpMethod !== "POST") return response(405, { success: false, error: "Method not allowed" }, origin);
  if (!HUBSPOT_ACCESS_TOKEN) return response(503, { success: false, error: "Onboarding integration is not configured" }, origin);

  try {
    // Do not trust email, UID, sourceApp, or consent booleans supplied in request JSON.
    const authorization = event.headers?.authorization || event.headers?.Authorization || "";
    const match = authorization.match(/^Bearer\s+(.+)$/i);
    if (!match) return response(401, { success: false, error: "Authentication required" }, origin);
    const decoded = await admin.auth().verifyIdToken(match[1], true);
    const uid = decoded.uid;

    // Marketing consent must be captured by a trusted consent-recording flow.
    // It is intentionally not accepted from the caller's request body.
    const consentRef = db.doc(`users/${uid}/consent/marketing`);
    const consentSnap = await consentRef.get();
    const consent = consentSnap.exists ? consentSnap.data() : null;
    if (!consent || consent.optedIn !== true || !consent.timestamp || !consent.policyVersion) {
      return response(200, { success: true, synced: false, reason: "No verified marketing consent; sync skipped" }, origin);
    }

    const profileSnap = await db.doc(`users/${uid}`).get();
    if (!profileSnap.exists) return response(404, { success: false, error: "Lingo ID profile not found" }, origin);
    const profile = profileSnap.data();
    const email = decoded.email;
    if (!email || decoded.email_verified !== true) {
      return response(403, { success: false, error: "A verified account email is required" }, origin);
    }

    const client = new hubspot.Client({ accessToken: HUBSPOT_ACCESS_TOKEN });
    const properties = {
      email,
      firstname: typeof profile.firstName === "string" ? profile.firstName : "",
      lastname: typeof profile.lastName === "string" ? profile.lastName : "",
      lingo_uid: uid,
      source_application: typeof consent.sourceApp === "string" ? consent.sourceApp : "The Lingo Legacy",
      marketing_opt_in: "true",
      marketing_opt_in_timestamp: new Date(consent.timestamp.toDate ? consent.timestamp.toDate() : consent.timestamp).toISOString(),
      marketing_policy_version: String(consent.policyVersion)
    };

    // Idempotent by email: update an existing contact instead of failing on duplicates.
    let existing;
    try {
      existing = await client.crm.contacts.basicApi.getById(email, ["email"], undefined, undefined, false, "email");
    } catch (error) {
      if (error?.statusCode !== 404 && error?.code !== 404) throw error;
    }

    let contactId;
    if (existing?.id) {
      const updated = await client.crm.contacts.basicApi.update(existing.id, { properties });
      contactId = updated.id;
    } else {
      const created = await client.crm.contacts.basicApi.create({ properties });
      contactId = created.id;
    }
    return response(200, { success: true, synced: true, contactId }, origin);
  } catch (error) {
    // Do not return provider errors, tokens, or PII to the caller.
    console.error("HubSpot onboarding sync failed", { name: error?.name, statusCode: error?.statusCode });
    const status = error?.code === "auth/id-token-expired" || error?.code === "auth/argument-error" ? 401 : 500;
    return response(status, { success: false, error: "Unable to complete onboarding sync" }, origin);
  }
};
