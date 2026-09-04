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
  PROJECTS,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter,
} from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

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
          {PROJECT_FILTERS.map((f) => (
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