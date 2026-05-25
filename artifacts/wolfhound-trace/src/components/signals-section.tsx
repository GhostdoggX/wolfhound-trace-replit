import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const signalsTop = [
  { date: "2025.06.10", title: "Crypto Forensics", note: "Enhanced blockchain analysis capabilities for cross-chain analysis." },
  { date: "2025.05.28", title: "Dark Web Monitoring", note: "Proactive threat detection across hidden networks and forums." },
  { date: "2025.05.15", title: "AI-Powered OSINT", note: "Machine learning integration for pattern recognition in large datasets." },
]

const signalsBottom = [
  { date: "2025.04.30", title: "Evidence Preservation", note: "Court-admissible documentation protocols for digital evidence." },
  { date: "2025.04.12", title: "Social Engineering Defense", note: "Vulnerability assessments for corporate information security." },
  { date: "2025.03.25", title: "Diverse Human Analysis and Reasoning", note: "Multi-perspective expert evaluation combining varied analytical approaches for comprehensive intelligence assessment." },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    checkScrollPosition()
    container.addEventListener('scroll', checkScrollPosition)
    window.addEventListener('resize', checkScrollPosition)
    return () => {
      container.removeEventListener('scroll', checkScrollPosition)
      window.removeEventListener('resize', checkScrollPosition)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return
    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      gsap.to(cursor, { x: e.clientX - rect.left, y: e.clientY - rect.top, duration: 0.5, ease: "power3.out" })
    }

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", () => setIsHovering(true))
    section.addEventListener("mouseleave", () => setIsHovering(false))

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", () => setIsHovering(true))
      section.removeEventListener("mouseleave", () => setIsHovering(false))
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards, { x: -100, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent",
          "transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      <div ref={headerRef} className="mb-8 md:mb-16 pr-6 md:pr-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Intel</span>
          <h2 className="mt-2 md:mt-4 font-[var(--font-bebas)] text-3xl sm:text-5xl md:text-7xl tracking-tight">ANALYSIS METHODOLOGY</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={scrollLeft} disabled={!canScrollLeft} className={cn("w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center font-mono text-base sm:text-lg transition-all duration-300", canScrollLeft ? "border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-black cursor-pointer" : "border-border/30 text-muted-foreground/30 cursor-not-allowed")} aria-label="Scroll left">←</button>
          <button onClick={scrollRight} disabled={!canScrollRight} className={cn("w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center font-mono text-base sm:text-lg transition-all duration-300", canScrollRight ? "border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-black cursor-pointer" : "border-border/30 text-muted-foreground/30 cursor-not-allowed")} aria-label="Scroll right">→</button>
        </div>
      </div>

      <div
        ref={(el) => { scrollRef.current = el; cardsRef.current = el; }}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {signalsTop.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} enableScrollEffect={signal.title === "Crypto Forensics"} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 pr-6 md:pr-12">
        {signalsBottom.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index + 3} />
        ))}
      </div>
    </section>
  )
}

function SignalCard({ signal, index, enableScrollEffect = false }: { signal: { date: string; title: string; note: string }; index: number; enableScrollEffect?: boolean }) {
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!enableScrollEffect || !cardRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 85%",
        onEnter: () => setIsScrollActive(true),
        onLeaveBack: () => setIsScrollActive(false),
      })
    }, cardRef)
    return () => ctx.revert()
  }, [enableScrollEffect])

  const isActive = isHovered || (enableScrollEffect && isScrollActive)

  return (
    <article
      ref={cardRef}
      className={cn("group relative flex-shrink-0 w-64 sm:w-72 transition-transform duration-500 ease-out hover:-translate-y-2", isActive && "-translate-y-2")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-6 transition-all duration-300", isActive && "border-accent/50")}>
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">No. {String(index + 1).padStart(2, "0")}</span>
          <time className="font-mono text-[10px] text-muted-foreground/60">{signal.date}</time>
        </div>
        <h3 className={cn("font-[var(--font-bebas)] text-3xl tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent", isActive && "text-accent")}>{signal.title}</h3>
        <div className={cn("h-px bg-accent/60 mb-4 transition-all duration-500 group-hover:w-full", isActive ? "w-full" : "w-12")} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{signal.note}</p>
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>
      <div className={cn("absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 transition-opacity duration-300 group-hover:opacity-100", isActive ? "opacity-100" : "opacity-0")} />
    </article>
  )
}
