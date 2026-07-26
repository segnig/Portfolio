"use client"

import { useEffect, useState } from "react"
import { Loader2, Globe, ArrowUpRight } from "lucide-react"

interface ProjectPreviewProps {
  url: string
  fallbackImage: string
  title: string
  className?: string
  interactive?: boolean
}

export function ProjectPreview({
  url,
  fallbackImage,
  title,
  className = "",
  interactive = false,
}: ProjectPreviewProps) {
  const [status, setStatus] = useState<{
    loading: boolean
    isPublic: boolean
    isEmbeddable: boolean
    screenshotUrl?: string
  }>({
    loading: true,
    isPublic: false,
    isEmbeddable: false,
  })

  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    let active = true

    const isLivePreviewable = (urlStr: string) => {
      if (!urlStr) return false
      const urlLower = urlStr.toLowerCase()
      
      // Exclude github links, empty links, placeholders, or localhost
      if (urlLower.includes("github.com")) return false
      if (
        urlLower === "" ||
        urlLower === "#" ||
        urlLower.includes("dummy") ||
        urlLower.includes("placeholder") ||
        urlLower.includes("localhost")
      ) {
        return false
      }
      
      return urlLower.startsWith("http://") || urlLower.startsWith("https://")
    }

    if (!isLivePreviewable(url)) {
      setStatus({
        loading: false,
        isPublic: false,
        isEmbeddable: false,
      })
      return
    }

    async function checkUrl() {
      try {
        const response = await fetch(`/api/check-link?url=${encodeURIComponent(url)}`)
        if (!response.ok) throw new Error("API call failed")
        const data = await response.json()
        if (active) {
          setStatus({
            loading: false,
            isPublic: data.isPublic,
            isEmbeddable: data.isEmbeddable,
            screenshotUrl: data.screenshotUrl,
          })
        }
      } catch (error) {
        console.error("Error checking preview status:", error)
        if (active) {
          setStatus({
            loading: false,
            isPublic: false,
            isEmbeddable: false,
          })
        }
      }
    }

    checkUrl()

    return () => {
      active = false
    }
  }, [url])

  // Get domain name for mock address bar
  const getDisplayUrl = () => {
    try {
      const parsed = new URL(url)
      return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname.slice(0, 20) + "..." : "")
    } catch {
      return url
    }
  }

  // Loading / Skeleton state
  if (status.loading) {
    return (
      <div className={`relative flex items-center justify-center bg-muted/30 animate-pulse rounded-md ${className}`}>
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="text-xs text-muted-foreground">Checking live preview...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`group/preview relative flex flex-col overflow-hidden bg-muted/20 border border-muted-foreground/10 rounded-md transition-all duration-300 ${className}`}>
      {/* Mock Browser Header Bar (Adds a highly premium tech feel) */}
      {status.isPublic && (
        <div className="flex items-center justify-between px-3 py-2 bg-muted/40 border-b border-muted-foreground/10 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-1 px-3 py-0.5 bg-background/50 rounded border border-muted-foreground/5 text-[10px] text-muted-foreground max-w-[200px] truncate select-none">
            <Globe className="h-3 w-3 text-muted-foreground/75" />
            <span className="truncate">{getDisplayUrl()}</span>
          </div>
          <div className="w-12 flex justify-end">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-0.5"
            >
              <span className="text-[9px] font-medium hidden sm:inline">Visit</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative flex-1 w-full h-full overflow-hidden min-h-0">
        {status.isPublic ? (
          interactive && status.isEmbeddable ? (
            // Interactive Live iframe in detail view / modal
            <div className="w-full h-full relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              )}
              <iframe
                src={url}
                title={title}
                className="w-full h-full border-none bg-white"
                onLoad={() => setIframeLoaded(true)}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          ) : (
            // Render Screenshot of URL
            <div className="relative w-full h-full">
              <img
                src={status.screenshotUrl || fallbackImage}
                alt={`Live preview of ${title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                onError={(e) => {
                  // Fallback if screenshot fails
                  const target = e.target as HTMLImageElement
                  target.src = fallbackImage
                }}
              />
              {/* Overlay Badge for Live Preview */}
              <div className="absolute bottom-2 right-2 bg-emerald-500/90 text-emerald-950 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow backdrop-blur-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-100 animate-ping" />
                <span>Live Preview</span>
              </div>
            </div>
          )
        ) : (
          // Fallback static image if not public
          <img
            src={fallbackImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
          />
        )}
      </div>
    </div>
  )
}
