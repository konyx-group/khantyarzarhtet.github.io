import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import {
  EMAIL,
  EMAIL_LINK,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from '@/lib/constants'

const contacts = [
  { label: 'OPEN SOURCE', link: GITHUB_URL },
  { label: 'PROFESSIONAL', link: LINKEDIN_URL },
  { label: 'TELEGRAM', link: TELEGRAM_URL },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      toast({
        title: 'Email copied!',
        description: `${EMAIL} has been copied to your clipboard.`,
      })
    } catch {
      toast({
        title: 'Could not copy',
        description: 'Please copy the email manually.',
      })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `${EMAIL_LINK}?subject=${subject}&body=${body}`
    toast({
      title: 'Opening your email client…',
      description: 'Your message has been prepared in a draft email.',
    })
  }

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

        {/* Contact Grid: Left form, Right info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl text-white font-light leading-tight mb-6">
              I'M CURRENTLY OPEN TO<br />
              PROJECTS & ROLES
            </h3>
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
              IN A HURRY? PLEASE REACH OUT DIRECTLY
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message…"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium tracking-widest uppercase text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Direct Links */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <div className="space-y-0">
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

            {/* Copy Email */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-4 tracking-widest uppercase">
                Or reach me directly
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={EMAIL_LINK}
                  className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 text-xs font-medium tracking-widest uppercase text-gray-300 border border-gray-800 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Copy
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>

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