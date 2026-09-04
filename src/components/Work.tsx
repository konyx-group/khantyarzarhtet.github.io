import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  WORK_IMAGE_URL,
  MOBILE_APP_IMAGE_URL,
  INDEPENDENT_IMAGE_URL,
  EMS_IMAGE_URL,
  POS_IMAGE_URL,
} from '@/lib/constants'

type Project = {
  title: string
  company: string
  location: string
  period: string
  description: string
  details: string
  skills: string[]
  category: 'Web' | 'Mobile' | 'Desktop'
  image: string
}

const projects: Project[] = [
  {
    title: 'PHP Laravel Developer',
    company: 'Current Professional Role',
    location: 'Yangon, Myanmar',
    period: '2026 — Present',
    description: 'Developing and maintaining a scalable E-Learning Platform. Previously built dynamic web applications including a Music Web App and a Voting Web App. Focused on robust backend architecture, database optimization, and writing clean, maintainable code.',
    details: 'Working full-time on a production E-Learning Platform, handling course management, user authentication, payment integration, and content delivery. Built a Music Web App with streaming features and a Voting Web App with real-time results. Deeply focused on writing clean, testable code and optimizing MySQL queries for performance at scale.',
    skills: ['Laravel', 'PHP', 'MySQL', 'Web Apps', 'Backend Architecture'],
    category: 'Web',
    image: WORK_IMAGE_URL,
  },
  {
    title: 'Mobile App Developer',
    company: 'Professional Role',
    location: 'Yangon, Myanmar',
    period: 'Late 2025 — 2026',
    description: 'Worked in a fast-paced environment developing multiple cross-platform mobile applications over a 6-month period. Successfully shipped diverse apps including School Management, Trip App, Shop App, Property App, Learning App, and Car App. Integrated Firebase for real-time data sync and backend services.',
    details: 'Shipped 6+ production mobile apps across different industries in just 6 months. Built a School Management App with attendance and grade tracking, a Trip App with booking flows, a Shop App with cart and checkout, a Property App with listings, a Learning App with course content, and a Car App with vehicle management. Used Firebase for real-time sync, push notifications, and cloud storage.',
    skills: ['React Native', 'Firebase', 'Mobile Development', 'UI/UX', 'API Integration'],
    category: 'Mobile',
    image: MOBILE_APP_IMAGE_URL,
  },
  {
    title: 'Independent Mobile Developer',
    company: 'Freelance & Personal Projects',
    location: 'Remote',
    period: '2025',
    description: 'Designed and developed a suite of mobile applications featuring an E-Commerce platform, a Voting app, a Music streaming app, and "Loving 360". Emphasized responsive UI design, smooth animations, and seamless user experiences on both iOS and Android.',
    details: 'Independently designed and built 4+ mobile applications from concept to store-ready. Built an E-Commerce platform with product catalogs and payments, a Voting app with live tallying, a Music streaming app with playlists and playback, and "Loving 360" — a relationship-focused app. Emphasized smooth animations, responsive layouts, and delightful UX on both platforms.',
    skills: ['React Native', 'JavaScript', 'Cross-Platform', 'Mobile UI Design'],
    category: 'Mobile',
    image: INDEPENDENT_IMAGE_URL,
  },
  {
    title: 'Employee Management System',
    company: 'OJT Project',
    location: 'MST College Training',
    period: '2025',
    description: 'Built a comprehensive Employee Management System from scratch using Pure PHP. Designed the relational database architecture and developed clean, functional interfaces for employee tracking and HR administration.',
    details: 'Designed and developed a full Employee Management System using pure PHP without frameworks — demonstrating deep understanding of core language features. Created relational database schemas for employees, departments, attendance, and leave management. Built clean, functional CRUD interfaces for HR administration.',
    skills: ['Pure PHP', 'MySQL', 'HTML/CSS', 'System Design', 'Relational Databases'],
    category: 'Web',
    image: EMS_IMAGE_URL,
  },
  {
    title: 'Point of Sale (POS) System',
    company: 'MST College (Final Project)',
    location: 'Yangon, Myanmar',
    period: '2025',
    description: 'Developed a robust desktop Point of Sale (POS) application using JavaFX as the capstone project. Implemented inventory management, secure transaction handling, and a user-friendly cashier interface utilizing Object-Oriented Programming principles.',
    details: 'Built a complete desktop POS system with JavaFX as my capstone project. Implemented inventory management with stock tracking, secure transaction handling with receipt generation, and an intuitive cashier interface. Applied Object-Oriented Programming principles throughout — inheritance, encapsulation, and MVC architecture to keep the codebase maintainable and extensible.',
    skills: ['Java', 'JavaFX', 'Desktop Application', 'OOP', 'Database Management'],
    category: 'Desktop',
    image: POS_IMAGE_URL,
  },
]

const FILTERS = ['All', 'Web', 'Mobile', 'Desktop'] as const
type Filter = (typeof FILTERS)[number]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<Filter>('All')

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

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
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-8 lg:mb-10"
        >
          PROJECTS
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div {...fadeInUp} className="mb-10 lg:mb-14 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-2 text-xs font-medium tracking-widest uppercase rounded-full border transition-all duration-300',
                filter === f
                  ? 'bg-white text-black border-white'
                  : 'text-gray-400 border-gray-800 hover:border-white/30 hover:text-white'
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects - Timeline Layout */}
        <div className="space-y-0">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={project.company + project.period}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="w-full text-left border-t border-gray-800 py-8 md:py-10 group hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Thumbnail */}
                <div className="md:col-span-3">
                  <div className="aspect-video overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Title & Meta */}
                <div className="md:col-span-4">
                  <h3 className="text-lg md:text-xl font-light text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.company}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {project.location}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-[10px] tracking-widest uppercase text-gray-500 border border-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Period + Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-gray-500 tracking-widest uppercase mb-3">
                    {project.period}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                    View details →
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Project Detail Modal */}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null)
          }}
        >
          <DialogContent className="max-w-2xl bg-[#111] border-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-light text-white pr-6">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                {selectedProject?.company} · {selectedProject?.location} ·{' '}
                <span className="uppercase tracking-widest">{selectedProject?.period}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {selectedProject && (
                <div className="aspect-video overflow-hidden rounded-lg border border-gray-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {selectedProject?.details}
              </p>

              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs text-gray-300 border border-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}