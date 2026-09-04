import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Expertise
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Section Title - smaller */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          SKILLS
        </motion.h2>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex items-center gap-3 px-5 py-4 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <span className="flex-none w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-white transition-colors duration-300" />
              <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}