import { motion } from 'framer-motion'

const talks = [
  {
    title: 'Building Scalable Web Applications with Laravel',
    event: 'Team Knowledge Sharing',
    year: '2026',
    link: '#',
  },
  {
    title: 'From JavaFX to Modern Web: My Development Journey',
    event: 'MST College Tech Talk',
    year: '2025',
    link: '#',
  },
  {
    title: 'Introduction to React Native for Cross-Platform Development',
    event: 'Developer Meetup',
    year: '2025',
    link: '#',
  },
  {
    title: 'Passing the ITPEC FE Exam: Tips & Study Strategies',
    event: 'MST College Workshop',
    year: '2025',
    link: '#',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Talks & Lectures
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Section Title - smaller */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          SPEAKING
        </motion.h2>

        {/* Talks List */}
        <div className="space-y-0">
          {talks.map((talk, index) => (
            <motion.a
              key={talk.title}
              href={talk.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-800/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {talk.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    Talk — {talk.event}
                  </p>
                </div>
                <span className="text-sm text-gray-600">{talk.year}</span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}