"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { HighlightText } from "@/components/highlight-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / About</span>
        <h2 id="who-we-are" className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          <HighlightText parallaxSpeed={0.6}>WHO</HighlightText> WE ARE
        </h2>

        {/* Quick Navigation */}
        <ul className="mt-6 space-y-2 font-mono text-xs md:text-sm">
          <li>
            <a href="#our-purpose" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; Our Purpose
            </a>
          </li>
          <li>
            <a href="#evidence-led" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; Evidence-Led Investigative Support
            </a>
          </li>
          <li>
            <a href="#osint-expertise" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; OSINT Expertise in Practice
            </a>
          </li>
          <li>
            <a href="#who-we-support" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; Who We Support
            </a>
          </li>
          <li>
            <a href="#digital-safety" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; Commitment to Digital Safety
            </a>
          </li>
          <li>
            <a href="#get-in-touch" className="text-muted-foreground hover:text-accent transition-colors">
              &bull; Get in Touch
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-3xl">
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          WolfhoundTrace Investigations was founded to help businesses, institutions, and individuals uncover risk, verify facts, and respond to uncertainty with confidence.
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          We believe that effective security begins with <span className="text-foreground">evidence, sound judgement, and the discipline to look beyond appearances.</span>
        </p>

        <h3 id="our-purpose" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Our Purpose</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Our work is built around a clear mission: to bring clarity where uncertainty exists. Whether a client is facing suspicious behaviour, internal risk, online harm, or reputational concerns, we help assess the situation carefully, verify the facts, and provide clear, practical guidance.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          <span className="text-accent">We do not rely on assumptions. We follow the evidence.</span>
        </p>
        <a href="#who-we-are" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-1 mb-2">
          &larr; Back to Who We Are
        </a>

        <h3 id="evidence-led" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Evidence-Led Investigative Support</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          My name is Michael, and I am the founder of WolfhoundTrace Investigations. Along with Tiana, a co-founder, we are the core of the investigative team. I am an Open Source Intelligence Analyst at Wolfhound Trace, with a specialisation in OSINT, Physical Security Analysis, corporate risk, and missing people and asset investigation. I support clients by converting dispersed and often incomplete information into precise, defensible, and actionable intelligence. My work includes source verification, digital footprint analysis, due diligence, threat assessment, and investigative support for matters requiring discretion, analytical rigour, and evidential clarity. With a disciplined intelligence-led approach, I identify relevant patterns, uncover inconsistencies, and develop findings that can be reviewed, challenged, and acted upon with confidence. My work is tailored for decision-making in <span className="text-foreground">sensitive, high-stakes, and fast-moving environments.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Tiana is an analyst at Wolfhound Trace with a background in scientific research, structured evidence evaluation, and complex data analysis. Her work focuses on transforming fragmented open-source information into clear, verified, and practical intelligence. She applies OSINT methods to digital footprint analysis, source verification, due diligence support, and risk assessment. She also supports competitive intelligence and market-oriented OSINT analysis, helping clients understand competitors, positioning, reputational signals, and publicly visible business risks. Tiana brings a methodical, research-driven approach to every case: <span className="text-foreground">separating facts from assumptions, identifying inconsistencies, and building findings that can be reviewed, challenged, and acted upon.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Wolfhound Trace was created to help individuals and organisations make better decisions when the information they need is incomplete, scattered, difficult to verify, or hidden in plain sight. We support clients with OSINT investigations, corporate due diligence, competitor intelligence, digital footprint analysis, cryptocurrency transaction analysis, asset discovery, reputational risk assessment, and online threat analysis. Our work turns open-source information into clear, evidence-led intelligence that supports practical decision-making. We focus on identifying what can be verified, what remains uncertain, and what practical steps may follow, using <span className="text-accent">lawful OSINT methods, structured analysis, and careful evidence evaluation.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          WolfhoundTrace was built around one non-negotiable principle: <span className="text-accent">integrity comes first.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Our investigative work combines traditional security discipline with modern, cyber-informed methodologies. We do not simply react to threats. We help clients identify vulnerabilities early, assess risks carefully, and act on verified facts rather than assumptions.
        </p>
        <a href="#who-we-are" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-1 mb-2">
          &larr; Back to Who We Are
        </a>

        <h3 id="osint-expertise" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">OSINT Expertise in Practice</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          <span className="text-foreground">We turn advanced OSINT into actionable intelligence.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          At WolfhoundTrace, our investigative methods are shaped by practical, high-pressure experience. Our team actively participates in international OSINT Capture the Flag challenges, working through complex scenarios involving digital footprint analysis, person tracing, social media intelligence, source verification, and missing-person search workflows.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          We recently secured <span className="text-accent">second place in the OSINT Shadows Conference CTF — Missing Persons track.</span> This achievement demonstrates our ability to identify, verify, and connect fragmented open-source data under competitive conditions.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          This practical experience strengthens every stage of our client work: rapid case assessment, disciplined source validation, evidence-led analysis, and clear, defensible reporting. It enables us to turn fragmented digital traces into actionable intelligence for digital investigations, corporate intelligence, and threat-intelligence matters.
        </p>
        <a href="#who-we-are" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-1 mb-2">
          &larr; Back to Who We Are
        </a>

        <h3 id="who-we-support" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Who We Support</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          WolfhoundTrace Investigations supports clients in situations where clarity, discretion, and careful analysis are essential. We work with businesses facing internal or external risks, institutions seeking guidance on digital safety, and individuals dealing with online harm, harassment, suspicious behaviour, or uncertainty around digital information.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Our role is not to create fear. Our role is to help clients understand what is happening, what can be verified, and what practical steps may be taken next.
        </p>
        <a href="#who-we-are" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-1 mb-2">
          &larr; Back to Who We Are
        </a>

        <h3 id="digital-safety" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Commitment to Digital Safety</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Our mission extends beyond the corporate environment. We are deeply committed to protecting vulnerable individuals in digital spaces and promoting safer online communities.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          We actively support initiatives to raise awareness about online bullying among schools, helping students, parents, and educators understand how to recognise, prevent, and respond to cyber-harassment.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          <span className="text-accent">We believe that awareness, early action, and open communication are essential to protecting people from digital harm.</span>
        </p>
        <a href="#who-we-are" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors mt-1 mb-2">
          &larr; Back to Who We Are
        </a>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Integrity and Confidentiality</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          In line with our commitment to operational security and client confidentiality, certain personal identifiers and background details are intentionally kept private. Where appropriate, relevant professional context can be shared within a confidential client conversation.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          What remains public is our unwavering commitment to <span className="text-foreground">evidence-led work, discretion, integrity, and responsible investigative support.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          At WolfhoundTrace, security is not limited to gates, cameras, or software. These tools matter, but they are only effective when supported by clear thinking, careful observation, and factual analysis.
        </p>

        <h3 id="get-in-touch" className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground mt-8 mb-3">Get in Touch</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          If you or your organisation are facing suspicious behaviour, require investigative insight, or need guidance on online harm and risk-related issues, we encourage you to reach out. Every concern deserves to be heard, assessed, and taken seriously.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="mailto:wolfhound_trace@pm.me?subject=Concern%20Report"
            className="group inline-flex items-center gap-3 border border-accent/50 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-background transition-all duration-200"
          >
            <ScrambleTextOnHover text="Report a Concern" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </Link>
          <Link
            href="mailto:enquiries@wolfhoundtrace.com?subject=Confidential%20Consultation%20Request"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Request Consultation" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      {/* Decorative line */}
      <div className="mt-16 h-[1px] bg-border w-full max-w-md" />
    </section>
  )
}
