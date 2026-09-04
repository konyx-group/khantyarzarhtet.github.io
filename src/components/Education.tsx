import { motion } from 'framer-motion'
import {
  UCSY_IMAGE_URL,
  MST_IMAGE_URL,
  OJT_IMAGE_URL,
} from '@/lib/constants'

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
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Background
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Section Title - smaller */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-20">
          {/* UCSY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src={UCSY_IMAGE_URL}
                alt="University of Computer Studies, Yangon"
                loading="lazy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                UNIVERSITY OF COMPUTER STUDIES, YANGON (UCSY)
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Computer Science
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  My journey in computer science began here, driven by a passion for practical engineering. Foundation in programming, algorithms, and software development.
                </p>
                <p className="text-sm text-gray-500">Yangon, Myanmar</p>
              </div>
            </motion.div>
          </div>

          {/* MST College */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  ITPEC — Fundamental Information Technology Engineer (FE)
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Studied Japan's ITPEC programs at MST College and proudly passed the Fundamental Information Technology Engineer (FE) examination in April 2025.
                </p>
                <p className="text-sm text-gray-500">April 2025</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src={MST_IMAGE_URL}
                alt="Books and education"
                loading="lazy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                MST COLLEGE / MYANMAR
              </p>
            </motion.div>
          </div>

          {/* OJT Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src={OJT_IMAGE_URL}
                alt="Laptop with code"
                loading="lazy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                ON-THE-JOB TRAINING
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  OJT — Employee Management System
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Crafted an Employee Management System with pure PHP during my On-the-Job Training, focused on solving real-world problems and building practical engineering skills.
                </p>
                <p className="text-sm text-gray-500">2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}