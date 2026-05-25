import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          OSINT
        </span>
      </div>

      <div ref={contentRef} className="flex-1 w-full">
        <SplitFlapAudioProvider>
          <div className="relative flex flex-col">
            <SplitFlapText text="WOLFHOUND" speed={40} className="text-scale-sm" />
            <div className="relative group/logo">
              <div
                className="absolute pointer-events-auto opacity-30 cursor-pointer transition-all duration-500 hover:opacity-60 rounded-full overflow-hidden hidden md:block"
                style={{
                  height: 'calc(var(--split-flap-size, clamp(4rem, 15vw, 14rem)) * 1.5)',
                  aspectRatio: '1/1',
                  left: 'calc(var(--split-flap-size, clamp(4rem, 15vw, 14rem)) * 0.73 * 4.5 + 70px)',
                  top: '-10px',
                  transform: 'translateX(-50%)'
                }}
              >
                <img
                  src="/images/wolfhound-logo.png"
                  alt=""
                  className="w-full h-full object-contain brightness-125 transition-all duration-500 hover:brightness-150 hover:drop-shadow-[0_0_25px_rgba(192,192,192,0.6)]"
                  aria-hidden="true"
                />
              </div>
              <SplitFlapText text="TRACE" speed={40} className="text-scale-sm text-accent relative z-10" isAccent />
            </div>
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-6 tracking-wide">
          Expert OSINT & Digital Intelligence
        </h2>

        <p className="mt-6 max-w-lg font-mono text-xs text-muted-foreground/80 leading-relaxed">
          We do not simply search. We trace. Every engagement is structured to reduce noise, verify evidence, and deliver findings that can be acted on with confidence.
        </p>

        <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          We help clients uncover, verify, and understand complex digital information with discretion, precision, and legally grounded methods.
        </p>

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-4 sm:px-6 py-2 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="View Services" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="mailto:enquiries@wolfhoundtrace.com?subject=Service%20initial%20consultation"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-4 sm:px-6 py-2 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Initiate Contact" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Wolfhound Trace / Digital Intelligence
        </div>
      </div>
    </section>
  )
}
