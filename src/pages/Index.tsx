import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Certifications } from '@/components/Certifications'
import { Education } from '@/components/Education'
import { Writing } from '@/components/Writing'
import { Speaking } from '@/components/Speaking'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Work />
        <Certifications />
        <Education />
        <Writing />
        <Speaking />
        <Contact />
      </main>
    </div>
  )
}

