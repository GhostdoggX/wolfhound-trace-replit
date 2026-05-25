import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight mb-4">
        404
      </h1>
      <p className="font-mono text-sm md:text-base text-muted-foreground mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
      >
        &larr; Return Home
      </Link>
    </main>
  )
}
