const { readFileSync } = require("node:fs");
const { initializeTestEnvironment, assertSucceeds, assertFails } = require("@firebase/rules-unit-testing");
const { doc, getDoc, setDoc, updateDoc, serverTimestamp } = require("firebase/firestore");

let env;
const projectId = "lingo-id-rules-test";

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId,
    firestore: { rules: readFileSync("../firestore.rules", "utf8") }
  });
});

afterEach(async () => env.clearFirestore());
afterAll(async () => env.cleanup());

function profile(uid, extra = {}) {
  return {
    uid,
    displayName: "Test Member",
    firstName: "Test",
    lastName: "Member",
    schemaVersion: 1,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    ...extra
  };
}

test("owner can create own minimal identity profile", async () => {
  const db = env.authenticatedContext("user-a").firestore();
  await assertSucceeds(setDoc(doc(db, "users/user-a"), profile("user-a")));
});

test("user cannot create a profile for another UID", async () => {
  const db = env.authenticatedContext("user-a").firestore();
  await assertFails(setDoc(doc(db, "users/user-b"), profile("user-b")));
});

test("owner can read own profile but not another user's profile", async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), "users/user-a"), {
      uid: "user-a", displayName: "A", firstName: "A", lastName: "",
      schemaVersion: 1, createdAt: new Date(), updatedAt: new Date()
    });
  });
  const a = env.authenticatedContext("user-a").firestore();
  const b = env.authenticatedContext("user-b").firestore();
  await assertSucceeds(getDoc(doc(a, "users/user-a")));
  await assertFails(getDoc(doc(b, "users/user-a")));
});

test("owner cannot alter protected XP, balance, tier, UID, or creation timestamp", async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), "users/user-a"), {
      uid: "user-a", displayName: "A", firstName: "A", lastName: "",
      schemaVersion: 1, createdAt: new Date(), updatedAt: new Date()
    });
  });
  const db = env.authenticatedContext("user-a").firestore();
  const ref = doc(db, "users/user-a");
  for (const field of ["xp", "walletBalance", "loyaltyTier", "uid", "createdAt"]) {
    await assertFails(updateDoc(ref, { [field]: field === "createdAt" ? new Date() : "tampered" }));
  }
});

test("owner can update allowed display name and theme preference", async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), "users/user-a"), {
      uid: "user-a", displayName: "A", firstName: "A", lastName: "",
      schemaVersion: 1, createdAt: new Date(), updatedAt: new Date()
    });
  });
  const db = env.authenticatedContext("user-a").firestore();
  await assertSucceeds(updateDoc(doc(db, "users/user-a"), {
    displayName: "Updated Name", preferredTheme: "dark", updatedAt: serverTimestamp()
  }));
});

test("invalid theme and client-created consent records are denied", async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), "users/user-a"), {
      uid: "user-a", displayName: "A", firstName: "A", lastName: "",
      schemaVersion: 1, createdAt: new Date(), updatedAt: new Date()
    });
  });
  const db = env.authenticatedContext("user-a").firestore();
  await assertFails(updateDoc(doc(db, "users/user-a"), {
    preferredTheme: "root", updatedAt: serverTimestamp()
  }));
  await assertFails(setDoc(doc(db, "users/user-a/consent/marketing"), {
    optedIn: true, timestamp: serverTimestamp(), policyVersion: "v1"
  }));
});
