import { motion } from 'framer-motion'

const contacts = [
  { label: 'OPEN SOURCE', type: 'location', link: 'https://github.com/khantyarzarhtet' },
  { label: 'PROFESSIONAL', type: 'location', link: 'https://linkedin.com/in/khantyarzarhtet' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Contact
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Headline - smaller */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Informal Text */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl text-white font-light leading-tight mb-4">
            I'M CURRENTLY<br />
            OPEN TO SELECT<br />
            PROJECTS & ROLES
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            IN A HURRY? PLEASE REACH OUT DIRECTLY
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-0 max-w-2xl">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-400 tracking-widest group-hover:text-white transition-colors">
                {contact.label}
              </span>
              <span className="text-gray-500 group-hover:text-white transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Or reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:khantyarzarhtet@example.com"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              kyzhtet@gmail.com
            </a>
            <a
              href="https://github.com/khantyarzarhtet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/khantyarzarhtet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base lg:text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Khant Yar Zar Htet. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Myanmar
          </p>
        </motion.footer>
      </div>
    </section>
  )
}