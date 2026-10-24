import { Code2, Globe2 } from 'lucide-react'

import { categoryLabel, getProjectCover, type Project } from '@/lib/projects'

function hasUrl(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

const actionClassName =
  'inline-flex items-center gap-1.5 rounded-md text-sm text-[#c5d0cc] underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none'

export function ProjectCard({ project }: { project: Project }) {
  const cover = getProjectCover(project)
  const repoUrl = hasUrl(project.repoUrl) ? project.repoUrl : null
  const liveUrl = hasUrl(project.liveUrl) ? project.liveUrl : null
  const category = `${categoryLabel[project.category]}${project.featured ? ' · Featured' : ''}`

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e1312] transition-colors duration-200 hover:border-white/20 motion-reduce:transition-none">
      <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#121816]">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-end p-6">
            <p className="text-sm text-[#8d9a95]">No screenshot yet</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-300">
          {category}
        </p>
        <h4 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h4>
        <p className="mt-3 text-sm leading-6 text-[#b7c2bd]">{project.summary}</p>
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-[#c5d0cc]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {repoUrl || liveUrl ? (
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-5">
              {repoUrl ? (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${project.title}`}
                  className={actionClassName}
                >
                  <Code2 className="size-3.5" aria-hidden="true" />
                  View Code
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className={actionClassName}
                >
                  <Globe2 className="size-3.5" aria-hidden="true" />
                  Live Demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
