export default {
  async fetch(request) {
    const url = new URL(request.url)

    const allowedPrefixes = ["/npm/", "/gh/", "/combine/"]
    if (!allowedPrefixes.some(p => url.pathname.startsWith(p))) {
      return new Response("Not Allowed", { status: 403 })
    }

    const target = "https://cdn.jsdelivr.net" + url.pathname + url.search

    const resp = await fetch(target, {
      cf: {
        cacheEverything: true,
        cacheTtl: 31536000
      }
    })

    const newResp = new Response(resp.body, resp)

    if (resp.status === 200) {
      newResp.headers.set(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      )
    } else {
      newResp.headers.set("Cache-Control", "public, max-age=600")
    }

    return newResp
  }
}
