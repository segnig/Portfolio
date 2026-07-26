import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ isPublic: false, isEmbeddable: false });
  }

  // Validate URL scheme
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return NextResponse.json({ isPublic: false, isEmbeddable: false });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    let response;
    try {
      response = await fetch(url, {
        method: "HEAD",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        cache: "no-store",
      });
      
      if (response.status === 405 || response.status === 501) {
        throw new Error("HEAD not supported");
      }
    } catch {
      // Fallback to GET if HEAD fails or is not supported
      response = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        cache: "no-store",
      });
    }

    clearTimeout(timeoutId);

    const xFrameOptions = response.headers.get("x-frame-options") || "";
    const csp = response.headers.get("content-security-policy") || "";
    
    // Check if the site explicitly forbids framing
    const hasFrameDeny = 
      xFrameOptions.toLowerCase().includes("deny") || 
      xFrameOptions.toLowerCase().includes("sameorigin");
      
    const hasCspFrameDeny = 
      csp.toLowerCase().includes("frame-ancestors") && 
      (csp.toLowerCase().includes("'none'") || csp.toLowerCase().includes("'self'"));

    const isEmbeddable = !hasFrameDeny && !hasCspFrameDeny;

    // Use Microlink screenshot service for reliable high-fidelity previews
    const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;

    return NextResponse.json({
      isPublic: response.ok,
      isEmbeddable: response.ok && isEmbeddable,
      screenshotUrl,
    });
  } catch (error) {
    console.error(`Error checking link ${url}:`, error);
    return NextResponse.json({ isPublic: false, isEmbeddable: false });
  }
}
