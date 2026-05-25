import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiments = [
  { title: "Corporate Due Diligence", medium: "Intelligence Analysis", description: "Comprehensive background verification for business partners, vendors, and investment targets." },
  { title: "Digital Forensics", medium: "Analysis", description: "Recovery and examination of digital evidence from devices and online sources." },
  { title: "Cryptocurrency Tracing", medium: "Blockchain", description: "Tracking and mapping crypto transactions across wallets and exchanges." },
  { title: "Open-Source Intelligence", medium: "OSINT", description: "Systematic collection and analysis of publicly available information." },
  { title: "Asset Discovery", medium: "Research", description: "Identification and verification of undisclosed assets and holdings." },
  { title: "Threat Assessment", medium: "Security", description: "Evaluation of digital footprints and potential exposure risks." },
  { title: "Search for Missing Person", medium: "Location", description: "Professional tracing and location services for missing individuals with discretion and care." },
  { title: "Executive Protection", medium: "Security", description: "Comprehensive protection services and risk assessment for high-profile individuals in digital landscape." },
  { title: "Brand Protection", medium: "Defense", description: "Monitoring and safeguarding brand integrity against counterfeiting and misuse." },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = () => {
    if (!gridRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scrollLeft = () => gridRef.current?.scrollBy({ left: -350, behavior: 'smooth' })
  const scrollRight = () => gridRef.current?.scrollBy({ left: 350, behavior: 'smooth' })

  useEffect(() => {
    const container = gridRef.current
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
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 90%", toggleActions: "play none none reverse" },
      })
      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-8 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Services</span>
          <h2 className="mt-2 md:mt-4 font-[var(--font-bebas)] text-3xl sm:text-5xl md:text-7xl tracking-tight">CAPABILITIES</h2>
          <p className="mt-3 max-w-md font-mono text-xs text-muted-foreground leading-relaxed">From corporate due diligence to digital forensics and open-source intelligence.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={scrollLeft} disabled={!canScrollLeft} className={cn("w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center font-mono text-base sm:text-lg transition-all duration-300", canScrollLeft ? "border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-black cursor-pointer" : "border-border/30 text-muted-foreground/30 cursor-not-allowed")} aria-label="Scroll left">←</button>
          <button onClick={scrollRight} disabled={!canScrollRight} className={cn("w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center font-mono text-base sm:text-lg transition-all duration-300", canScrollRight ? "border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-black cursor-pointer" : "border-border/30 text-muted-foreground/30 cursor-not-allowed")} aria-label="Scroll right">→</button>
        </div>
      </div>

      <div
        ref={gridRef}
        className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={checkScrollPosition}
      >
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} persistHover={index === 0} />
        ))}
      </div>
    </section>
  )
}

function WorkCard({ experiment, index, persistHover = false }: { experiment: { title: string; medium: string; description: string }; index: number; persistHover?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)
    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive || isTouched

  return (
    <article
      ref={cardRef}
      className={cn("group relative border border-border/40 p-4 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden min-h-[160px] w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0", isActive && "border-accent/60")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 3000)}
      onClick={() => setIsTouched(!isTouched)}
    >
      <div className={cn("absolute inset-0 bg-accent/5 transition-opacity duration-500", isActive ? "opacity-100" : "opacity-0")} />
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{experiment.medium}</span>
        <h3 className={cn("mt-2 sm:mt-3 font-[var(--font-bebas)] text-xl sm:text-2xl md:text-4xl tracking-tight transition-colors duration-300", isActive ? "text-accent" : "text-foreground")}>{experiment.title}</h3>
      </div>
      <div className="relative z-10">
        <p className={cn("font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]", isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>{experiment.description}</p>
      </div>
      <span className={cn("absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300", isActive ? "text-accent" : "text-muted-foreground/40")}>{String(index + 1).padStart(2, "0")}</span>
      <div className={cn("absolute top-0 right-0 w-12 h-12 transition-all duration-500", isActive ? "opacity-100" : "opacity-0")}>
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
