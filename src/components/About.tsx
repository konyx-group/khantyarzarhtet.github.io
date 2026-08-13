import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            About Khant
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* First Block - Education & Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Developer at a laptop in a modern workspace"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              UCSY & MST COLLEGE / MYANMAR
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              After graduating high school with 3 distinctions, my journey in computer science began at the University of Computer Studies, Yangon (UCSY). Driven by a passion for practical engineering, I expanded my horizons at MST College, where I studied Japan's ITPEC programs and proudly passed the Fundamental Information Technology Engineer (FE) examination in April 2025.
            </p>
          </motion.div>
        </div>

        {/* Quote Block - Highlight Achievement */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-300">
            "CERTIFIED FUNDAMENTAL<br />
            <span className="text-white underline underline-offset-8">IT ENGINEER (FE)</span><br />
            WITH A PASSION FOR<br />
            CLEAN ARCHITECTURE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            JAPAN ITPEC CERTIFICATION <br />
            2025
          </p>
        </motion.div>

        {/* Second Block - Projects & OJT Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I believe in learning by building. From developing a fully functional POS system using JavaFX to crafting an Employee Management System with pure PHP during my On-the-Job Training, I have consistently focused on solving real-world problems. I continuously upgrade my tech stack, mastering PHP, Laravel, and React.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Lines of code on a monitor"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SYSTEM DEVELOPMENT & OJT EXPERIENCE
            </p>
          </motion.div>
        </div>

        {/* Third Block - Current Career */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaborating around a laptop"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PROFESSIONAL JOURNEY<br />
              (2025 - PRESENT)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              After gaining diverse industry experience—including working as a Mobile Developer in late 2025—I currently work full-time as a PHP Laravel Developer. Today, my focus is on writing robust back-end code, building scalable web applications, and delivering reliable software solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}