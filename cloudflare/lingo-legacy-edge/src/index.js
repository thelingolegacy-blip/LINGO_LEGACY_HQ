const ORIGIN = "https://lingo-legacy-studio-hub-nhda3b.v2.appdeploy.ai";

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const target = new URL(incoming.pathname + incoming.search, ORIGIN);
    const upstreamRequest = new Request(target.toString(), request);
    const response = await fetch(upstreamRequest);
    const headers = new Headers(response.headers);
    headers.set("x-lingo-edge", "cloudflare-appdeploy-bridge");
    headers.set("x-lingo-origin", "appdeploy-v2");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
