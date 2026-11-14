'use client'

import { useEffect, useState } from 'react'

import { ProjectCard } from '@/components/project-card'
import {
  getPublicProjects,
  projectFilters,
  type ProjectFilter,
  type ProjectGroup,
} from '@/lib/projects'
import { cn } from '@/lib/utils'

const projects = getPublicProjects()

function isGroup(value: string): value is ProjectGroup {
  return projectFilters.some((filter) => filter.id === value && filter.id !== 'all')
}

export function ProjectShowcase() {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  useEffect(() => {
    function onFilter(event: Event) {
      const value = (event as CustomEvent<string>).detail
      if (value === 'all' || isGroup(value)) setFilter(value)
    }

    window.addEventListener('project-filter', onFilter)
    return () => window.removeEventListener('project-filter', onFilter)
  }, [])

  const visible =
    filter === 'all' ? projects : projects.filter((project) => project.groups.includes(filter))
  const featured = visible.filter((project) => project.prominence === 'featured')
  const primary = visible.filter((project) => project.prominence === 'primary')
  const secondary = visible.filter((project) => project.prominence === 'secondary')
  const showSecondaryHeading = secondary.length > 0 && (featured.length > 0 || primary.length > 0)

  return (
    <div>
      <div
        role="group"
        aria-label="Project categories"
        className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {projectFilters.map((item) => {
          const selected = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.id)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none',
                selected
                  ? 'border-emerald-300/40 bg-emerald-400/10 text-white'
                  : 'border-white/10 text-[#c5d0cc] hover:border-white/25 hover:text-white',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-sm leading-6 text-[#b7c2bd]">No projects in this category.</p>
      ) : null}

      {featured.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : null}

      {primary.length > 0 ? (
        <ul className={cn('grid grid-cols-1 gap-5 md:grid-cols-2', featured.length > 0 && 'mt-5')}>
          {primary.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : null}

      {secondary.length > 0 ? (
        <div className={cn(showSecondaryHeading && 'mt-12')}>
          {showSecondaryHeading ? (
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-[#8d9a95]">
              More projects
            </h3>
          ) : null}
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {secondary.map((project) => (
              <li key={project.slug} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export function Web3FilterLink() {
  return (
    <a
      href="#projects"
      className="mt-6 inline-flex rounded-md text-sm font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      onClick={(event) => {
        event.preventDefault()
        window.dispatchEvent(new CustomEvent('project-filter', { detail: 'web3' }))
        document.getElementById('projects')?.scrollIntoView()
      }}
    >
      View the smart contract projects
    </a>
  )
}
