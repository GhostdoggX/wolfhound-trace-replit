import type React from "react"
import { useEffect, useRef, useCallback } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time)
    rafIdRef.current = requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      })

      lenisRef.current = lenis

      let ticking = false
      lenis.on("scroll", () => {
        if (!ticking) {
          ticking = true
          requestAnimationFrame(() => {
            ScrollTrigger.update()
            ticking = false
          })
        }
      })

      rafIdRef.current = requestAnimationFrame(raf)
    }, 50)

    return () => {
      clearTimeout(initTimeout)
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      lenisRef.current?.destroy()
    }
  }, [raf])

  return <>{children}</>
}
