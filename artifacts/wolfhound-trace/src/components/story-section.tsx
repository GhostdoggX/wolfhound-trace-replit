import { useRef, useEffect } from "react"
import { Link } from "wouter"
import { HighlightText } from "@/components/highlight-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
      gsap.from(contentRef.current, {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="story" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Story</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          THE <HighlightText parallaxSpeed={0.6}>WOLFHOUND</HighlightText> SPIRIT
        </h2>
      </div>

      <div ref={contentRef} className="max-w-3xl">
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          The Irish Wolfhound is a creature of profound duality — possessing both quiet nobility and an unyielding drive when on the hunt. It is a creature of purpose, bred for patience, precision, and loyalty.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          When wolves moved unseen among the flock, it was the wolfhound who sensed the danger first. With an instinct sharpened over centuries, the wolfhound could identify the wolf hiding in sheep's clothing — the predator disguised among the innocent.
          <span className="text-accent"> Silent, steady, and relentless,</span> it tracked every trace until the truth revealed itself.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-12">
          At Wolfhound Trace, we carry that same spirit into the digital world. Our mission is to uncover the hidden — the wolves moving quietly through networks, data trails, and online shadows.
        </p>

        <Link
          href="/story"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          <ScrambleTextOnHover text="Read Full Story" as="span" duration={0.6} />
          <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
        </Link>
      </div>

      <div className="mt-16 h-[1px] bg-border w-full max-w-md" />
    </section>
  )
}
