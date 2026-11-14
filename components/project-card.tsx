import { ArrowRight, Globe2 } from 'lucide-react'
import Link from 'next/link'

import { getProjectCover, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

const TAGS_ON_CARD = 4

function hasUrl(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function monogram(title: string) {
  const letters = title
    .split(/\s+/)
    .map((word) => word.replace(/[^A-Za-z]/g, ''))
    .filter((word) => word.length > 0)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')

  return letters || 'PR'
}

const actionClassName =
  'inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-[#d5deda] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none'

function ProjectPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-white/10 bg-[#101614] sm:aspect-[16/10]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
      />
      <div className="relative px-6 text-center">
        <p aria-hidden="true" className="text-4xl font-semibold tracking-[-0.04em] text-white/20">
          {monogram(title)}
        </p>
        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8d9a95]">
          Screenshot coming
        </p>
      </div>
      <span className="sr-only">Placeholder for {title}. Not a product screenshot.</span>
    </div>
  )
}

function ProjectMedia({ project, featured }: { project: Project; featured: boolean }) {
  const cover = getProjectCover(project)

  if (!cover) {
    return <ProjectPlaceholder title={project.title} />
  }

  const contain = project.imageFit === 'contain'

  return (
    <div
      className={cn(
        'overflow-hidden border-b border-white/10',
        contain ? 'bg-[#f3f5f4]' : 'bg-[#121816]',
        featured ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[16/10]',
      )}
    >
      <img
        src={cover.src}
        alt={cover.alt}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className={cn(
          'h-full w-full',
          contain ? 'object-contain' : 'object-cover object-top',
          !contain &&
            'transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100',
        )}
      />
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.prominence === 'featured'
  const liveUrl = hasUrl(project.liveUrl) ? project.liveUrl : null
  const repoUrl = hasUrl(project.repoUrl) ? project.repoUrl : null
  const showAllTags = !project.hasDetail || project.tags.length <= TAGS_ON_CARD
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, TAGS_ON_CARD)
  const hiddenTagCount = project.tags.length - visibleTags.length

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1312] transition-colors duration-200 hover:border-white/20 motion-reduce:transition-none">
      <ProjectMedia project={project} featured={featured} />
      <div className={cn('flex flex-1 flex-col', featured ? 'p-5 sm:p-7' : 'p-5 sm:p-6')}>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-300">
          {project.typeLabel}
        </p>
        <h3
          className={cn(
            'mt-2 font-semibold tracking-[-0.03em] text-white',
            featured ? 'text-2xl sm:text-[1.7rem]' : 'text-xl',
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#b7c2bd]">{project.summary}</p>
        {project.contribution ? (
          <p className="mt-4 text-sm leading-6 text-[#d5deda]">
            <span className="font-medium text-white">Contribution. </span>
            {project.contribution}
          </p>
        ) : null}
        {visibleTags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {visibleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-[#d5deda]"
              >
                {tag}
              </li>
            ))}
            {hiddenTagCount > 0 ? (
              <li className="rounded-md px-2 py-1 text-xs text-[#8d9a95]">+{hiddenTagCount} more</li>
            ) : null}
          </ul>
        ) : null}
        {liveUrl || repoUrl || project.hasDetail ? (
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName}
              >
                <Globe2 className="size-3.5" aria-hidden="true" />
                {project.liveLabel ?? 'Visit website'}
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName}
              >
                GitHub
                <span className="sr-only"> repository for {project.title} (opens in a new tab)</span>
              </a>
            ) : null}
            {project.hasDetail ? (
              <Link href={`/projects/${project.slug}`} className={actionClassName}>
                View details
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
