import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Real-Time Analytics Platform',
    company: 'DataFlow',
    location: 'Remote',
    period: '2023 — Present',
    description: 'Architected and built a real-time analytics dashboard handling 10M+ events per day. Reduced time-to-insight from hours to seconds using WebSockets, ClickHouse, and a custom React visualization layer.',
    skills: ['React', 'TypeScript', 'Node.js', 'ClickHouse', 'WebSockets', 'Docker'],
  },
  {
    title: 'Design System & Component Library',
    company: 'Stripe',
    location: 'San Francisco, CA',
    period: '2021 — 2023',
    description: 'Led the migration of a legacy UI kit to a modern, accessible component library used by 40+ product teams. Improved Lighthouse accessibility scores by 35% and cut bundle size by 20%.',
    skills: ['Design Systems', 'Accessibility', 'React', 'Storybook', 'Testing', 'CI/CD'],
  },
  {
    title: 'E-Commerce API & Checkout',
    company: 'Shopify',
    location: 'Toronto, Canada',
    period: '2019 — 2021',
    description: 'Shipped core checkout APIs and payment integrations used by thousands of merchants. Focused on reliability, fraud prevention, and sub-100ms response times at scale.',
    skills: ['GraphQL', 'Node.js', 'PostgreSQL', 'Redis', 'Payments', 'Performance'],
  },
  {
    title: 'Open Source CLI Tool',
    company: 'Personal Project',
    location: 'Open Source',
    period: '2018 — Present',
    description: 'Created and maintains a popular developer CLI with 500K+ monthly downloads. Built in TypeScript and distributed via npm, with plugin architecture and automated release pipelines.',
    skills: ['TypeScript', 'CLI Design', 'Open Source', 'Automation', 'DX'],
  },
  {
    title: 'Mobile-First Marketplace',
    company: 'Early-Stage Startup',
    location: 'Berlin, Germany',
    period: '2016 — 2018',
    description: 'Joined as the first full-time engineer and helped build the MVP through Series A. Shipped iOS and Android apps with React Native and a Node.js backend serving 100K+ users.',
    skills: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Mobile'],
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
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
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
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {project.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
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
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
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
