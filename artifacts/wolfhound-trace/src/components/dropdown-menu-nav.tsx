import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home", number: "00" },
  { id: "signals", label: "Intel", number: "01" },
  { id: "work", label: "Services", number: "02" },
  { id: "principles", label: "Approach", number: "03" },
  { id: "about", label: "About", number: "04" },
  { id: "story", label: "Story", number: "05" },
  { id: "colophon", label: "Contact", number: "06" },
]

export function DropdownMenuNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 },
    )
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <div ref={menuRef} className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 sm:gap-4 border-2 px-4 py-2 sm:px-8 sm:py-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300",
          isOpen
            ? "border-[#f97316] text-[#f97316] bg-[#0a0a0a]"
            : "border-[#f97316] text-white hover:text-[#f97316] bg-[#0a0a0a]"
        )}
        style={{
          animation: isOpen ? 'none' : 'pulseGlow 2s ease-in-out infinite',
          boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'
        }}
      >
        <span>Menu</span>
        <span className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}>↓</span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 border border-[#f97316] overflow-hidden min-w-[180px] shadow-xl"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <div className="flex flex-col py-2">
            {navItems.map(({ id, label, number }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200 text-left",
                  activeSection === id
                    ? "text-[#f97316] bg-[#f97316]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="text-[10px] opacity-60 w-5">{number}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
