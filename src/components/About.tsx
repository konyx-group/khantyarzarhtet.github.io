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

        {/* First Block - Personal Intro */}
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
              FULL STACK DEVELOPER / MYANMAR
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Hi, I'm Khant — a full-stack developer focused on turning complex problems into fast, accessible, and human-centered applications. I care deeply about clean code, thoughtful design, and building software that genuinely makes a difference.
            </p>
          </motion.div>
        </div>

        {/* Quote Block - Philosophy */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-300">
            "BUILDING FAST,<br />
            <span className="text-white underline underline-offset-8">ACCESSIBLE</span>, AND<br />
            HUMAN-CENTERED<br />
            SOFTWARE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            MY DEVELOPMENT PHILOSOPHY
          </p>
        </motion.div>

        {/* Second Block - Learning by Building */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I believe in learning by building. Every project is a chance to solve real-world problems and sharpen my craft — from desktop applications to cross-platform mobile apps and scalable web platforms. I'm always exploring new technologies and pushing my boundaries further.
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
              LEARNING BY BUILDING
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