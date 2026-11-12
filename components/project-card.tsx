import { Code2, FileText, Globe2 } from 'lucide-react'

import {
  categoryLabel,
  getProjectCover,
  getProjectGallery,
  type Project,
} from '@/lib/projects'

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
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-[#101614]">
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

function ProjectMedia({ project }: { project: Project }) {
  const cover = getProjectCover(project)

  if (!cover) {
    return <ProjectPlaceholder title={project.title} />
  }

  return (
    <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#121816]">
      <img
        src={cover.src}
        alt={cover.alt}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const gallery = getProjectGallery(project)
  const repoUrl = hasUrl(project.repoUrl) ? project.repoUrl : null
  const liveUrl = hasUrl(project.liveUrl) ? project.liveUrl : null
  const caseStudyUrl = hasUrl(project.caseStudyUrl) ? project.caseStudyUrl : null
  const status = project.status ?? categoryLabel[project.category]
  const liveLabel = project.category === 'web3' ? 'Live demo' : 'Live project'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e1312] transition-colors duration-200 hover:border-white/20 motion-reduce:transition-none">
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-300">
          {status}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#b7c2bd]">{project.summary}</p>
        {project.contribution ? (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-white">My contribution</h4>
            <p className="mt-1.5 text-sm leading-6 text-[#b7c2bd]">{project.contribution}</p>
          </div>
        ) : null}
        {project.chainNotes ? (
          <p className="mt-4 text-sm leading-6 text-[#b7c2bd]">
            <span className="font-medium text-white">Contract notes. </span>
            {project.chainNotes}
          </p>
        ) : null}
        {gallery.length > 0 ? (
          <ul className="mt-4 flex gap-2" aria-label={`More screenshots of ${project.title}`}>
            {gallery.map((image) => (
              <li key={image.src} className="h-14 w-24 overflow-hidden rounded-md bg-[#121816]">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={240}
                  height={140}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </li>
            ))}
          </ul>
        ) : null}
        {project.tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 px-2 py-1 text-xs text-[#c5d0cc]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {repoUrl || liveUrl || caseStudyUrl ? (
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${liveLabel} for ${project.title}`}
                className={actionClassName}
              >
                <Globe2 className="size-3.5" aria-hidden="true" />
                {liveLabel}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className={actionClassName}
              >
                <Code2 className="size-3.5" aria-hidden="true" />
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {caseStudyUrl ? (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Case study for ${project.title}`}
                className={actionClassName}
              >
                <FileText className="size-3.5" aria-hidden="true" />
                Case study
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
