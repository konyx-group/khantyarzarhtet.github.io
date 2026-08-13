import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Developer workspace with code on screen"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-24 md:pb-0 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Small badge */}
            <span className="inline-block mb-5 px-3 py-1 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              Full Stack Developer
            </span>

            {/* Name - smaller and cleaner */}
            <h1 className="font-display leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">KHANT YAR ZAR</span>
              <span className="block text-white/90">HTET</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-sm sm:text-base text-white/80 max-w-md leading-relaxed"
            >
              Full stack developer focused on building fast, accessible, and human-centered mobile and web applications. Currently shipping Java, JavaScript, TypeScript, React, ReactNative, PHP, Laravel and Node.js products.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}