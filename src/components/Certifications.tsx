import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type Certification = {
  title: string
  issuer: string
  year: string
  description: string
}

const certifications: Certification[] = [
  {
    title: 'Professional Web Developer',
    issuer: 'Fairway Technology',
    year: '2024',
    description: 'Completed professional web development training at Fairway Technology, gaining hands-on experience in building production-ready web applications with modern technologies. This certification covers frontend and backend development, including HTML/CSS, JavaScript, PHP, and database integration — laying the foundation for my career in professional web development.',
  },
  {
    title: 'Fundamental Information Technology Engineer (FE)',
    issuer: 'Japan ITPEC Program',
    year: '2025',
    description: 'Passed the FE examination in April 2025 — a prestigious Japanese ITPEC certification validating fundamental knowledge of computer science, algorithms, data structures, system design, and software engineering. This international certification demonstrates a strong engineering foundation recognized across Japan and Asia.',
  },
  {
    title: 'IP Certificate',
    issuer: 'MST College',
    year: '2024',
    description: 'Certified in the Information Technology Professional (IP) program at MST College, covering foundational IT concepts, computer architecture, networking fundamentals, and professional engineering practices. The IP program is the first level of Japan\'s ITPEC certification pathway.',
  },
  {
    title: 'Java SE',
    issuer: 'MST College',
    year: '2024',
    description: 'Certified in Java Standard Edition, demonstrating proficiency in core Java programming, object-oriented concepts, data structures, collections, exception handling, and desktop application development with JavaFX. This certification reflects strong foundation in one of the world\'s most widely-used programming languages.',
  },
  {
    title: 'Internship Certificate',
    issuer: 'Fairway Technology',
    year: '2024',
    description: 'Completed a professional internship at Fairway Technology, contributing to real-world development projects and gaining valuable industry experience. Worked with professional teams, followed software development workflows, version control practices, and shipped meaningful features to production.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Achievements
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Section Title */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          CERTIFICATIONS
        </motion.h2>

        {/* Certification Cards - 2 columns, full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex items-center gap-3 px-5 py-4 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-pointer text-left"
            >
              <span className="flex-none w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-white transition-colors duration-300" />
              <span className="flex-1 min-w-0">
                <span className="block text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                  {cert.title}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5 group-hover:text-gray-400 transition-colors duration-300">
                  {cert.issuer}
                </span>
              </span>
              <span className="shrink-0 text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                {cert.year}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Certification Detail Modal */}
        <Dialog
          open={selectedCert !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedCert(null)
          }}
        >
          <DialogContent className="max-w-lg bg-[#111] border-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl font-light text-white pr-6">
                {selectedCert?.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                {selectedCert?.issuer} ·{' '}
                <span className="uppercase tracking-widest">{selectedCert?.year}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2">
              {/* Badge */}
              <div className="flex-none w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {selectedCert?.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}