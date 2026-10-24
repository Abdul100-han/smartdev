import { Code2, Globe2 } from 'lucide-react'

import { categoryLabel, getProjectCover, type Project } from '@/lib/projects'

function hasUrl(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

const actionClassName =
  'inline-flex items-center gap-1.5 rounded-md text-[#aab5b0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none'

export function ProjectCard({ project }: { project: Project }) {
  const cover = getProjectCover(project)
  const repoUrl = hasUrl(project.repoUrl) ? project.repoUrl : null
  const liveUrl = hasUrl(project.liveUrl) ? project.liveUrl : null

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] transition-colors duration-200 hover:border-emerald-300/30 hover:bg-white/[0.045] motion-reduce:transition-none">
      {cover ? (
        <div className="aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[#0c1211]">
          <img
            src={cover.src}
            alt={cover.alt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300">
          {categoryLabel[project.category]}
        </p>
        <h4 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h4>
        <p className="mt-3 text-sm leading-6 text-[#8d9a95]">{project.summary}</p>
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-[#9aa7a2]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {repoUrl || liveUrl ? (
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-7 text-xs font-medium">
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
                </a>
              ) : null}
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className={`${actionClassName} text-emerald-300 hover:text-emerald-200`}
                >
                  <Globe2 className="size-3.5" aria-hidden="true" />
                  Live Demo
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
