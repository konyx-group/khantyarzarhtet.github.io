import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Repo = {
  name: string
  description: string
  language: string
  stargazers_count: number
  forks_count: number
  html_url: string
}

const FALLBACK_REPOS: Repo[] = [
  {
    name: 'khantyarzarhtet',
    description: 'My GitHub profile — exploring new technologies and shipping side projects.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/khantyarzarhtet',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://api.github.com/users/khantyarzarhtet/repos?sort=updated&per_page=6', {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data: Repo[]) => {
        setRepos(data.length > 0 ? data : FALLBACK_REPOS)
        setError(false)
      })
      .catch(() => {
        setError(true)
        setRepos(FALLBACK_REPOS)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return (
    <section id="github" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Open Source
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight mb-12 lg:mb-16"
        >
          GITHUB
        </motion.h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-white/[0.03] border border-white/5 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between p-5 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-sm font-medium text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {repo.description || 'No description available.'}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gray-400" />
                      {repo.language}
                    </span>
                  )}
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {error && (
          <p className="mt-6 text-sm text-gray-600">
            Showing fallback profile link — live GitHub data couldn't be loaded.
          </p>
        )}
      </div>
    </section>
  )
}