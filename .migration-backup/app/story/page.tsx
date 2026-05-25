import Link from "next/link"
import type { Metadata } from "next"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"

export const metadata: Metadata = {
  title: "Our Story | Wolfhound Trace",
  description: "The story behind Wolfhound Trace - carrying the spirit of the Irish Wolfhound into the digital world of OSINT and investigations.",
}

export default function StoryPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      
      {/* Hero Header - matching main page */}
      <header className="relative min-h-[60vh] flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
        <AnimatedNoise opacity={0.03} />
        
        {/* Left vertical labels */}
        <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
            STORY
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
            The Story Behind Wolfhound Trace
          </h2>

          <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            The spirit of the Irish Wolfhound carried into the digital age.
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
            Wolfhound Trace / Story
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="relative z-10 px-6 md:pl-28 md:pr-12 py-16 md:py-24 -mt-[70px]">
        <article className="max-w-3xl">
          {/* The Wolfhound */}
          <section className="mb-16 relative">
            <img 
              src="/images/wolfhound-wireframe.jpg" 
              alt="Vigilant wolfhound" 
              className="absolute right-[200px] top-0 w-60 md:w-80 h-auto opacity-40 hover:opacity-70 transition-opacity duration-500 -mt-[210px] mix-blend-screen pointer-events-none -z-10"
              style={{ 
                maskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 70%)',
                filter: 'drop-shadow(0 0 15px rgba(192,192,192,0.4))'
              }}
            />
            <div className="flex items-start gap-6">
              <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
                THE <span className="text-accent">WOLFHOUND</span>
              </h3>
            </div>
            <p className="font-mono text-sm leading-relaxed mb-6 mt-[10px]" style={{ color: 'rgb(192,192,192)' }}>
              The Irish Wolfhound is a creature of profound duality — possessing both quiet nobility and an unyielding drive when on the hunt. It is a creature of purpose, bred for patience, precision, and loyalty. When wolves moved unseen among the flock, it was the wolfhound who sensed the danger first.
            </p>
            <p className="font-mono text-sm leading-relaxed" style={{ color: 'rgb(192,192,192)' }}>
              With an instinct honed over centuries, the wolfhound could identify the wolf hiding in sheep&apos;s clothing — the predator disguised among the innocent, waiting for its moment to strike. This innate ability to see through deception and detect danger where others saw only the ordinary made the wolfhound invaluable. <span className="text-foreground font-medium">Silent, steady, and relentless,</span> it tracked every trace until the truth revealed itself.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">MISSION</span>
            </h3>
            <p className="font-mono text-sm leading-relaxed mb-6" style={{ color: 'rgb(192,192,192)' }}>
              At Wolfhound Trace, we carry that same spirit into the digital world. Our mission is to uncover the hidden — the wolves in sheep&apos;s clothing moving quietly through networks, data trails, and online shadows. Like our namesake, we operate with focus, discipline, and integrity.
            </p>
            <p className="font-mono text-sm leading-relaxed" style={{ color: 'rgb(192,192,192)' }}>
              Every investigation we undertake — whether corporate, digital, or financial — receives the same level of dedication. We treat each client with equal importance and discretion, ensuring absolute confidentiality and pursuing every lead until fully verified.
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">PHILOSOPHY</span>
            </h3>
            <p className="font-mono text-sm leading-relaxed mb-6" style={{ color: 'rgb(192,192,192)' }}>
              Our philosophy values accuracy over haste. Just as a wolfhound never loses the scent, we do not stop until every digital trace aligns with the truth. This isn&apos;t just our work — it&apos;s our instinct.
            </p>
            <p className="font-mono text-sm leading-relaxed" style={{ color: 'rgb(192,192,192)' }}>
              In the complex world of open-source intelligence (OSINT) and digital forensics, true results require silent precision, keen observation, and the patience to track digital footprints across the globe without alerting the target.
            </p>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">COMMITMENT</span>
            </h3>
            <p className="font-mono text-sm leading-relaxed mb-6" style={{ color: 'rgb(192,192,192)' }}>
              Like the hounds of old, our investigators are trained to see what others miss. We operate with unwavering loyalty to our clients&apos; privacy and a fierce commitment to uncovering the truth — no matter how deeply it is buried beneath layers of corporate obfuscation or digital anonymity.
            </p>
            <p className="font-mono text-sm text-foreground font-medium leading-relaxed text-lg">
              We do not simply search; we trace.
            </p>
            <p className="font-mono text-sm text-accent leading-relaxed mt-4">
              Relentless in pursuit. Silent in execution.
            </p>
          </section>

          {/* Contact CTA */}
          <section>
            <p className="font-mono text-sm mb-6" style={{ color: 'rgb(192,192,192)' }}>
              Ready to discuss your investigation needs?
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
      </div>
    </main>
  )
}
