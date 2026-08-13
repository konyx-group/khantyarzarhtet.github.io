import { motion } from 'framer-motion'

const projects = [
  {
    title: 'PHP Laravel Developer',
    company: 'Current Professional Role',
    location: 'Yangon, Myanmar',
    period: '2026 — Present',
    description: 'Developing and maintaining a scalable E-Learning Platform. Previously built dynamic web applications including a Music Web App and a Voting Web App. Focused on robust backend architecture, database optimization, and writing clean, maintainable code.',
    skills: ['Laravel', 'PHP', 'MySQL', 'Web Apps', 'Backend Architecture'],
  },
  {
    title: 'Mobile App Developer',
    company: 'Professional Role',
    location: 'Yangon, Myanmar',
    period: 'Late 2025 — 2026',
    description: 'Worked in a fast-paced environment developing multiple cross-platform mobile applications over a 6-month period. Successfully shipped diverse apps including School Management, Trip App, Shop App, Property App, Learning App, and Car App. Integrated Firebase for real-time data sync and backend services.',
    skills: ['React Native', 'Firebase', 'Mobile Development', 'UI/UX', 'API Integration'],
  },
  {
    title: 'Independent Mobile Developer',
    company: 'Freelance & Personal Projects',
    location: 'Remote',
    period: '2025',
    description: 'Designed and developed a suite of mobile applications featuring an E-Commerce platform, a Voting app, a Music streaming app, and "Loving 360". Emphasized responsive UI design, smooth animations, and seamless user experiences on both iOS and Android.',
    skills: ['React Native', 'JavaScript', 'Cross-Platform', 'Mobile UI Design'],
  },
  {
    title: 'Employee Management System',
    company: 'OJT Project',
    location: 'MST College Training',
    period: '2025',
    description: 'Built a comprehensive Employee Management System from scratch using Pure PHP. Designed the relational database architecture and developed clean, functional interfaces for employee tracking and HR administration.',
    skills: ['Pure PHP', 'MySQL', 'HTML/CSS', 'System Design', 'Relational Databases'],
  },
  {
    title: 'Point of Sale (POS) System',
    company: 'MST College (Final Project)',
    location: 'Yangon, Myanmar',
    period: '2025',
    description: 'Developed a robust desktop Point of Sale (POS) application using JavaFX as the capstone project. Implemented inventory management, secure transaction handling, and a user-friendly cashier interface utilizing Object-Oriented Programming principles.',
    skills: ['Java', 'JavaFX', 'Desktop Application', 'OOP', 'Database Management'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Selected Work
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* Section Title - smaller */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.company + project.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-10 lg:py-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {project.company}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    {project.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {project.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full hover:border-white/20 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}