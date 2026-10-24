import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProjectCard } from '@/components/project-card'
import { getAllProjects, getProjectCover, type Project } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Project preview',
  robots: { index: false, follow: false },
}

function field(label: string, value: string) {
  return (
    <div className="grid grid-cols-[8.5rem_1fr] gap-3 text-sm">
      <dt className="text-[#7d8985]">{label}</dt>
      <dd className="text-[#d5deda]">{value}</dd>
    </div>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  const cover = getProjectCover(project)

  return (
    <section className="border-t border-white/[0.08] py-10">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
        {project.title}
      </h2>
      <dl className="mt-4 flex flex-col gap-2">
        {field('Slug', project.slug)}
        {field('On the site', project.published ? 'Visible' : 'Hidden')}
        {field('Featured', project.featured ? 'Yes' : 'No')}
        {field('Order', String(project.sortOrder))}
        {field('Cover', cover ? cover.src : 'Not set')}
        {field(
          'More images',
          project.images && project.images.length > 0
            ? `${project.images.length} file${project.images.length === 1 ? '' : 's'}`
            : 'None',
        )}
        {field('Live URL', project.liveUrl ?? 'Not set')}
        {field('Repository', project.repoUrl ?? 'Not set')}
        {field('Description', project.description ? 'Stored, not shown on the card' : 'Not set')}
      </dl>
      {project.description ? (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8d9a95]">{project.description}</p>
      ) : null}
      <div className="mt-6 max-w-xl">
        <ProjectCard project={project} />
      </div>
    </section>
  )
}

export default function ProjectManagerPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound()
  }

  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-[#080b0d] px-6 py-12 text-[#f3f6f4]">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Local preview only
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Project manager
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#8d9a95]">
          This page reads <code className="text-[#d5deda]">lib/projects.ts</code> while{' '}
          <code className="text-[#d5deda]">npm run dev</code> is running. It does not save
          edits, upload images, or change GitHub. The deployed site returns a 404 here.
        </p>
        <ol className="mt-6 flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-[#c5d0cc]">
          <li>Edit the project entry in lib/projects.ts.</li>
          <li>Put screenshots in public/projects/ and set coverImage to /projects/file-name.</li>
          <li>Refresh this page to preview a hidden draft, then open the homepage to see published projects.</li>
          <li>Commit and push. Vercel deploys from GitHub.</li>
        </ol>
        <p className="mt-6 text-sm text-[#8d9a95]">
          <a
            href="/"
            className="text-emerald-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Back to the portfolio
          </a>
          <span className="mx-2 text-[#59655f]">/</span>
          <a
            href="/#projects"
            className="text-emerald-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Public project section
          </a>
        </p>
        <p className="mt-10 text-sm text-[#7d8985]">
          {projects.length} projects in the file, including hidden drafts.
        </p>
        {projects.map((project) => (
          <ProjectPreview key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
