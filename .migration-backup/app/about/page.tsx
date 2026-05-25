import Link from "next/link"
import type { Metadata } from "next"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"

export const metadata: Metadata = {
  title: "About Us | Wolfhound Trace",
  description: "Learn about WolfhoundTrace Investigations, founded by Michael, a Corporate & Physical Security Specialist with nearly two decades of experience.",
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      
      {/* Hero Header - matching main page */}
      <header className="relative min-h-[60vh] flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
        <AnimatedNoise opacity={0.03} />
        
        {/* Left vertical labels */}
        <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
            ABOUT
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 w-full">
          <SplitFlapAudioProvider>
            <div className="relative flex flex-col">
              <SplitFlapText text="WOLFHOUND" speed={80} className="text-scale-sm" />
              <SplitFlapText text="TRACE" speed={80} className="text-scale-sm text-accent" isAccent />
              <div className="mt-4">
                <SplitFlapMuteToggle />
              </div>
            </div>
          </SplitFlapAudioProvider>

          <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-6 tracking-wide">
            About Us
          </h2>

          <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            The people and principles behind WolfhoundTrace Investigations.
          </p>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <span className="rotate-180">→</span>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Floating info tag */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Wolfhound Trace / About
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="relative z-10 px-6 md:pl-28 md:pr-12 py-16 md:py-24">
        <article className="max-w-3xl">
          {/* Greeting */}
          <section className="mb-16">
            <p className="font-mono text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Hello, my name is <span className="text-accent">Michael</span> and I&apos;m founder of WolfhoundTrace Investigations.
            </p>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">PHILOSOPHY</span>
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              At WolfhoundTrace, we believe that true security isn&apos;t just about locks and firewalls—it&apos;s about the relentless pursuit of factual truth.
            </p>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              As a Corporate & Physical Security Specialist with nearly two decades of experience blending physical defense with cyber innovation, I founded this platform on a singular principle: <span className="text-foreground font-medium">Integrity is non-negotiable.</span>
            </p>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              THE <span className="text-accent">WOLFHOUND</span> SPIRIT
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              In an era where threats often hide in plain sight, we embody the spirit of the Wolfhound—loyal to the flock, yet fierce in the face of deception.
            </p>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              Our mission is to identify the &quot;wolves in sheep&apos;s clothing&quot; that compromise organizational safety. By fusing traditional protocols with advanced human engineering insights, we don&apos;t just react to threats; <span className="text-accent">we expose them.</span>
            </p>
          </section>

          {/* Commitment */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">COMMITMENT</span>
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              We are committed to excellence, transparency, and the noble pursuit of a more secure, honest world.
            </p>
          </section>

          {/* Decorative divider */}
          <div className="h-[1px] bg-border w-full max-w-md mb-16" />

          {/* Contact CTA */}
          <section>
            <p className="font-mono text-sm text-muted-foreground mb-6">
              Ready to discuss your security needs?
            </p>
            <a
              href="mailto:enquiries@wolfhoundtrace.com?subject=Service%20initial%20consultation"
              className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              Initiate Contact
              <span className="transition-transform duration-300 hover:translate-x-1">→</span>
            </a>
            
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <span className="rotate-180">→</span>
                Back to Home
              </Link>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border/20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2025 Wolfhound Trace. All communications handled with discretion.
          </p>
        </footer>
      </div>
    </main>
  )
}
