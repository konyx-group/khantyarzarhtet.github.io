import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Khant is a dedicated developer who delivers clean, reliable code. His ability to learn fast and ship production-ready features is impressive.',
    name: 'Team Lead',
    role: 'Current Workplace',
  },
  {
    quote: 'A self-driven engineer with a strong foundation in both frontend and backend. He consistently focuses on solving real problems.',
    name: 'Mentor',
    role: 'MST College',
  },
  {
    quote: 'Great collaborator with a keen eye for clean architecture and thoughtful UX. A valuable asset to any development team.',
    name: 'Colleague',
    role: 'Fairway Technology',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Feedback
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          TESTIMONIALS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              className="flex flex-col justify-between p-6 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              <blockquote className="text-sm text-gray-300 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-gray-800">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}