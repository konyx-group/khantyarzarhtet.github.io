import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '6+', label: 'Mobile Apps Built' },
  { value: '1', label: 'ITPEC FE Certified' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export function Stats() {
  return (
    <section className="bg-[#0d0d0d] border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-white leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}