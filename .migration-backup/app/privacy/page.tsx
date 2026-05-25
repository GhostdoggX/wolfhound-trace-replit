import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Wolfhound Trace",
  description: "Privacy Policy for Wolfhound Trace - Expert OSINT & Digital Intelligence services.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-8 px-6 md:px-12 border-b border-border/30">
        <Link 
          href="/" 
          className="font-[var(--font-bebas)] text-2xl tracking-tight hover:text-accent transition-colors duration-200"
        >
          WOLFHOUND TRACE
        </Link>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <header className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Legal</span>
          <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">PRIVACY POLICY</h1>
          <p className="mt-4 font-mono text-xs text-muted-foreground">Last updated: April 2026</p>
        </header>

        <div className="space-y-12 font-mono text-sm leading-relaxed text-foreground/80">
          {/* Section 1 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">1. Scope and Controller</h2>
            <p>
              This Privacy Policy explains how Wolfhound Trace processes personal data in connection with its website, client communications, and professional investigative and intelligence services. For the purposes of applicable data protection laws, including the General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (nFADP), Wolfhound Trace acts as a data controller with respect to personal data processed for its own business operations.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">2. Legal Basis for Processing</h2>
            <p>
              We process personal data only where we have a valid legal basis to do so. Depending on the context, this may include performance of a contract, compliance with legal obligations, protection of vital interests, legitimate interests, or consent where required by law. Where we rely on legitimate interests, we assess and balance those interests against the rights and freedoms of the individuals concerned.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">3. Categories of Data We May Process</h2>
            <p>
              Depending on the nature of the engagement, we may process identification data, contact details, professional information, communication records, technical website data, and other information necessary to perform due diligence, investigative, or intelligence-related work. Where permitted by law and required for a specific mandate, we may also process data obtained from lawful public sources or from third parties acting within their legal authority.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">4. Purposes of Processing</h2>
            <p>
              We process personal data for the purpose of providing our services, responding to enquiries, managing client relationships, conducting due diligence, supporting investigations, maintaining business records, complying with legal and regulatory obligations, and protecting the security and integrity of our systems and operations. We do not use personal data for unrelated or incompatible purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">5. Data Sharing and Third Parties</h2>
            <p>
              We may disclose personal data where necessary to trusted service providers, professional advisers, authorities, or other third parties involved in the delivery of our services, provided that appropriate confidentiality and data protection safeguards are in place. Where required, we ensure that such parties are contractually bound to protect personal data and to process it only in accordance with our instructions or applicable law.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">6. International Transfers</h2>
            <p>
              Where personal data is transferred outside the EEA or Switzerland, we take appropriate measures to ensure that the transfer is carried out in accordance with applicable data protection requirements. These measures may include adequacy determinations, standard contractual clauses, or other legally recognised transfer safeguards.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes for which it was collected, including the fulfilment of contractual obligations, compliance with legal retention requirements, dispute resolution, and the establishment, exercise, or defence of legal claims. When data is no longer required, it is securely deleted or anonymised in accordance with our retention practices.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">8. Data Security</h2>
            <p>
              We implement highest industry standard encryption protocols for data at rest and in transit. Our infrastructure is designed with strict access controls, ensuring that sensitive intelligence is only accessible to cleared personnel directly involved in the specific operation. Regular security audits and penetration testing are conducted to maintain the integrity of our systems.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">9. Your Rights</h2>
            <p>
              Subject to applicable law, you may have rights to access, rectify, erase, restrict, object to processing, and request data portability. Where processing is based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal. In some cases, these rights may be limited by law, particularly where disclosure would affect legal privileges, ongoing investigations, the rights of others, or our legal obligations.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">10. Cookies and Analytics</h2>
            <p>
              Our website may use necessary cookies and limited analytics or security-related tools to operate the site, maintain functionality, and understand usage patterns. Where consent is required, we will obtain it before placing non-essential cookies. You may also manage cookie preferences through your browser settings, subject to the limitations of browser functionality.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">11. Contact and Data Protection Requests</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, you may contact us at{" "}
              <a href="mailto:info@wolfhoundtrace.com" className="text-accent hover:underline">
                info@wolfhoundtrace.com
              </a>
              . We will respond to legitimate requests in accordance with applicable law and may request information necessary to verify your identity before taking action on your request.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. The most recent version will always be published on this page. If we make material changes, we will take reasonable steps to draw your attention to them where appropriate.
            </p>
          </section>

          {/* Legal Disclaimer */}
          <section className="pt-8 border-t border-border/30">
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight text-foreground mb-4">Legal Disclaimer</h2>
            <p>
              Wolfhound Trace provides professional open-source intelligence (OSINT), digital investigation, and due diligence services. All investigations are conducted in compliance with applicable laws and regulations, including GDPR and data protection standards.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border/20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 Wolfhound Trace. All rights reserved.
          </p>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">
            Professional OSINT and investigation services worldwide
          </p>
          <Link 
            href="/" 
            className="inline-block mt-6 font-mono text-xs text-accent hover:underline"
          >
            ← Back to Home
          </Link>
        </footer>
      </article>
    </main>
  )
}
