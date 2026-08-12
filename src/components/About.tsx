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
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Bruce</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Developer at a laptop in a modern workspace"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              MIT - CAMBRIDGE / USA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Bruce started in computer science at MIT, where he fell in love with the
              craft of turning ideas into software. After years of building across
              startups and established product teams, he now specializes in full stack
              web development with a focus on performance, accessibility, and clean
              architecture.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "NAMED BY THE<br />
            <span className="text-white underline underline-offset-8">2023 PRODUCT AWARDS</span><br />
            AS ONE OF THE TOP TEN<br />
            INDIE DEVELOPERS TO WATCH."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            GLOBAL TECH<br />
            TALENT RANK
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              From early experiments in Python and JavaScript to production systems
              serving millions of users, Bruce has spent over a decade refining his
              approach to product engineering. He cares as much about the user
              experience as the code underneath it.
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
              ENGINEERING DEEP WORK - SAN FRANCISCO / USA
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaborating around a laptop"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PRODUCT SQUAD - BERLIN / DE<br />
              (2022)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Today Bruce works as an independent developer and consultant, helping
              teams ship reliable software faster. He contributes to open source,
              writes about engineering practices, and speaks at conferences when a
              topic genuinely excites him.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
