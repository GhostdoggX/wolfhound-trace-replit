import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { AboutSection } from "@/components/about-section"
import { StorySection } from "@/components/story-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"
import { DropdownMenuNav } from "@/components/dropdown-menu-nav"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <DropdownMenuNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <AboutSection />
        <StorySection />
        <ColophonSection />
      </div>
    </main>
  )
}
