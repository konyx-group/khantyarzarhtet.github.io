import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* MIT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="MIT Campus"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                MIT - CAMBRIDGE / USA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.S. Computer Science & Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Focused on distributed systems, algorithms, and human-computer
                  interaction. Completed coursework in machine learning, software
                  construction, and systems programming.
                </p>
                <p className="text-sm text-gray-500">2008 — 2012</p>
              </div>
            </motion.div>
          </div>

          {/* Recurse Center */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Recurse Center — Programming Retreat
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  A self-directed, community-driven retreat where Bruce deepened his
                  understanding of functional programming, compilers, and low-level
                  systems while pair-programming with engineers from around the world.
                </p>
                <p className="text-sm text-gray-500">2015</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Developers collaborating in a modern space"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                RECURSE CENTER - NEW YORK / USA
              </p>
            </motion.div>
          </div>

          {/* AWS Cert */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Server room with blue lights"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                CLOUD CERTIFICATION - REMOTE
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  AWS Solutions Architect — Professional
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Validated expertise in designing distributed applications and systems
                  on AWS. Covers high availability, security, cost optimization, and
                  scalable cloud architecture.
                </p>
                <p className="text-sm text-gray-500">2020</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
