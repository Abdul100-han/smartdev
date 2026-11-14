import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Globe2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteNav } from '@/components/site-nav'
import {
  getAdjacentProjects,
  getDetailProjects,
  getProject,
  getProjectGallery,
} from '@/lib/projects'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getDetailProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project?.hasDetail || !project.published) {
    return { title: 'Project' }
  }

  return {
    title: `${project.title} | Abdulsalam M. Abubakar`,
    description: project.summary,
  }
}

const textLinkClassName =
  'inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-[#d5deda] underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300'

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project?.hasDetail || !project.published) {
    notFound()
  }

  const gallery = getProjectGallery(project)
  const { previous, next } = getAdjacentProjects(project.slug)
  const story = project.description ?? project.summary

  return (
    <div className="min-h-screen bg-[#080b0d] text-[#f3f6f4]">
      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link href="/#projects" className={textLinkClassName}>
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All projects
        </Link>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
          {project.typeLabel}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#d5deda]">{story}</p>

        {project.liveUrl ? (
          <p className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLinkClassName}
            >
              <Globe2 className="size-3.5" aria-hidden="true" />
              {project.liveLabel ?? 'Visit website'}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}
        {project.linkNote ? (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#8d9a95]">{project.linkNote}</p>
        ) : null}

        {gallery.length > 0 ? (
          <ul className="mt-10 flex flex-col gap-4" aria-label={`${project.title} screenshots`}>
            {gallery.map((image) => (
              <li
                key={image.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#121816]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  className={
                    project.imageFit === 'contain'
                      ? 'mx-auto max-h-[720px] w-full bg-[#f3f5f4] object-contain'
                      : 'h-auto w-full object-contain object-top'
                  }
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm text-[#8d9a95]">A product screenshot is not on file yet.</p>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            {project.role ? (
              <>
                <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                  My role
                </h2>
                <p className="mt-4 text-base leading-7 text-[#d5deda]">{project.role}</p>
              </>
            ) : null}
            {project.tags.length > 0 ? (
              <>
                <h2
                  className={
                    project.role
                      ? 'mt-10 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300'
                      : 'text-xs font-medium uppercase tracking-[0.16em] text-emerald-300'
                  }
                >
                  Technology
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-sm text-[#d5deda]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {project.contributions?.length ? (
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                What I worked on
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#d5deda]">
                    <span
                      className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-emerald-300"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {project.repoUrl ? (
          <p className="mt-10">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLinkClassName}
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}

        <nav
          aria-label="Other projects"
          className="mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="rounded-xl border border-white/10 p-4 transition-colors hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-[#8d9a95]">Previous</span>
              <span className="mt-2 flex items-center gap-2 text-base font-medium text-white">
                <ArrowLeft className="size-4" aria-hidden="true" />
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="rounded-xl border border-white/10 p-4 text-right transition-colors hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:col-start-2"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-[#8d9a95]">Next</span>
              <span className="mt-2 flex items-center justify-end gap-2 text-base font-medium text-white">
                {next.title}
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          ) : null}
        </nav>
      </main>
    </div>
  )
}
