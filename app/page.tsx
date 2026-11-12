import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'

import { ProjectCard } from '@/components/project-card'
import { SiteNav } from '@/components/site-nav'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import { getProjectsByCategory } from '@/lib/projects'
import {
  aboutParagraphs,
  availability,
  email,
  experience,
  formalEducation,
  githubUrl,
  heroTechnologies,
  highlights,
  linkedInUrl,
  location,
  navItems,
  phoneDisplay,
  phoneHref,
  skillGroups,
  training,
  type Role,
} from '@/lib/profile'
import { cn } from '@/lib/utils'

const containerClassName = 'mx-auto w-full max-w-6xl px-6 lg:px-8'

const focusRingClassName =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300'

const primaryCtaClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#07110d] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 motion-reduce:transition-none'

const secondaryCtaClassName = cn(
  'inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.04] motion-reduce:transition-none',
  focusRingClassName,
)

const textLinkClassName = cn(
  'inline-flex items-center gap-2 rounded-md transition-colors hover:text-white motion-reduce:transition-none',
  focusRingClassName,
)

const contactLinkClassName = cn(
  'flex items-center gap-3 rounded-md text-sm text-[#d5deda] transition-colors hover:text-white motion-reduce:transition-none',
  focusRingClassName,
)

const contactIconClassName =
  'flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-emerald-300'

function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-t border-white/10', className)}>
      <div className={cn(containerClassName, 'py-16 md:py-24')}>{children}</div>
    </section>
  )
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-7 text-pretty text-[#b7c2bd]">{children}</div>
      ) : null}
    </div>
  )
}

function ExperienceItem({ job }: { job: Role }) {
  const hasDetails = Boolean(job.points?.length || job.tags?.length)

  return (
    <article className="py-5 sm:py-6">
      <h3 className="text-base font-semibold text-white sm:text-lg">{job.role}</h3>
      <p className="mt-1 text-sm text-emerald-300">{job.organization}</p>
      {job.meta ? <p className="mt-1 text-sm text-[#8d9a95]">{job.meta}</p> : null}
      {hasDetails ? (
        <details className="group">
          <summary
            className={cn(
              'mt-3 inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md text-sm text-[#c5d0cc] hover:text-white [&::-webkit-details-marker]:hidden',
              focusRingClassName,
            )}
          >
            <span className="group-open:hidden">Show details</span>
            <span className="hidden group-open:inline">Hide details</span>
            <ChevronDown
              className="size-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </summary>
          {job.points?.length ? (
            <ul className="mt-4 flex max-w-3xl flex-col gap-2 text-sm leading-6 text-[#b7c2bd]">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-emerald-300/70"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {job.tags?.length ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/10 px-2 py-1 text-xs text-[#c5d0cc]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </details>
      ) : null}
    </article>
  )
}

export default function Page() {
  const productionProjects = getProjectsByCategory('production')
  const web3Projects = getProjectsByCategory('web3')
  const featuredProjects = productionProjects.filter((project) => project.featured)
  const otherProjects = productionProjects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-[#080b0d] text-[#f3f6f4] selection:bg-emerald-400/30 selection:text-emerald-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-emerald-400 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#07110d]"
      >
        Skip to content
      </a>
      <SiteNav />

      <main id="content">
        <section id="top" className="scroll-mt-24">
          <div
            className={cn(
              containerClassName,
              'grid items-center gap-10 pb-14 pt-12 md:pb-16 md:pt-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]',
            )}
          >
            <div>
              <p className="text-sm font-medium text-emerald-300">Abdulsalam M. Abubakar</p>
              <p className="mt-2 text-sm text-[#9aa6a1]">
                Software Engineer · Full-stack & mobile · Blockchain & Web3
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                Software Engineer building web, mobile & full-stack products.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-[#b7c2bd] sm:text-lg sm:leading-8">
                I have 5 years of experience building software, from business platforms
                and mobile applications to backend systems and AI-powered products. I
                work across the stack, turning product requirements into reliable
                applications that are ready for real-world use.
              </p>
              <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#d5deda]" aria-label="Key technologies">
                {heroTechnologies.map((technology, index) => (
                  <li key={technology} className="flex items-center gap-3">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-white/25">
                        /
                      </span>
                    ) : null}
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className={primaryCtaClassName}>
                  View My Work
                </a>
                <a href="#contact" className={secondaryCtaClassName}>
                  Get in Touch
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-3 text-sm text-[#8d9a95]">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-emerald-300" aria-hidden="true" />
                  {location}
                </p>
                <p>{availability}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLinkClassName}
                  >
                    <GitHubIcon className="size-4" />
                    GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLinkClassName}
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-none">
              <div className="h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-[#121816] sm:h-32 sm:w-32 lg:aspect-square lg:h-auto lg:w-full lg:rounded-2xl">
                <img
                  src="/me-2.jpeg"
                  alt="Portrait of Abdulsalam M. Abubakar"
                  width={741}
                  height={704}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_20%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="scroll-mt-24 border-t border-white/10">
          <div className={cn(containerClassName, 'py-8 md:py-10')}>
            <h2 className="sr-only">Professional highlights</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-0">
              {highlights.map((item, index) => (
                <li
                  key={item.value}
                  className={cn(
                    'lg:px-8',
                    index > 0 && 'lg:border-l lg:border-white/10',
                    index === 0 && 'lg:pl-0',
                    index === highlights.length - 1 && 'lg:pr-0',
                  )}
                >
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 max-w-[14rem] text-sm leading-6 text-[#b7c2bd]">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="projects">
          <SectionIntro eyebrow="Selected work" title="Selected projects">
            <p>
              Production software I have helped build and ship. Smart contract work is in{' '}
              <a href="#web3" className="text-white underline-offset-4 hover:underline">
                Blockchain &amp; Web3
              </a>.
            </p>
          </SectionIntro>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-[#8d9a95]">
            Production projects
          </p>
          {featuredProjects.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : null}
          {otherProjects.length > 0 ? (
            <div className={cn('grid gap-5 md:grid-cols-2', featuredProjects.length > 0 && 'mt-5')}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : null}
        </Section>

        <Section id="experience">
          <SectionIntro eyebrow="Career" title="Professional experience">
            <p>
              Roles across mobile products, business platforms, AI systems, and civic
              technology.
            </p>
          </SectionIntro>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {experience.map((job) => (
              <ExperienceItem key={`${job.organization}-${job.role}`} job={job} />
            ))}
          </div>
        </Section>

        <Section id="expertise">
          <SectionIntro eyebrow="Skills" title="Technical expertise">
            <p>The languages, frameworks, and tools I use on the products and roles above.</p>
          </SectionIntro>
          <div className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="border-t border-white/10 pt-5">
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c5d0cc]">
                  {group.skills.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="web3">
          <SectionIntro eyebrow="Blockchain" title="Blockchain & Web3">
            <p>
              Alongside my full-stack and mobile engineering work, I&apos;m developing my
              specialization in Blockchain and Web3. My work focuses on Solidity smart
              contracts, EVM development, contract testing with Foundry, and building
              decentralized applications that connect smart contracts to frontend
              interfaces.
            </p>
          </SectionIntro>
          <div className="grid gap-5 md:grid-cols-2">
            {web3Projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        <Section id="about">
          <SectionIntro eyebrow="Profile" title="About me" />
          <div className="max-w-3xl space-y-5 text-base leading-7 text-[#d5deda]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="education">
          <SectionIntro eyebrow="Background" title="Education and professional development">
            <p>
              An HND in Mechanical Engineering, and blockchain training from Cyfrin
              Updraft and Alchemy University.
            </p>
          </SectionIntro>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <article>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                Formal education
              </h3>
              <h4 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                {formalEducation.qualification}
              </h4>
              <p className="mt-2 text-sm leading-6 text-[#d5deda]">{formalEducation.field}</p>
              <p className="mt-2 text-sm leading-6 text-[#8d9a95]">{formalEducation.school}</p>
            </article>
            <article>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                Professional development
              </h3>
              <div className="mt-4 divide-y divide-white/10 border-t border-white/10">
                {training.map((item) => (
                  <div key={item.provider} className="py-5 first:pt-5">
                    <h4 className="text-lg font-semibold text-white">{item.provider}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#d5deda]">{item.program}</p>
                    {'status' in item && item.status ? (
                      <p className="mt-2 text-sm text-emerald-300">{item.status}</p>
                    ) : null}
                    <p className="mt-2 text-sm leading-6 text-[#8d9a95]">{item.topics}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <Section id="contact">
          <SectionIntro eyebrow="Contact" title="Let's build something useful.">
            <p>
              I&apos;m open to software engineering opportunities, remote roles, and contract
              projects. If you&apos;re building a product or looking for an engineer to join
              your team, I&apos;d be happy to hear from you.
            </p>
          </SectionIntro>
          <div className="max-w-3xl">
            <a href={`mailto:${email}`} className={cn(primaryCtaClassName, 'w-full break-all sm:w-auto')}>
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {email}
            </a>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              <li>
                <a href={phoneHref} className={contactLinkClassName}>
                  <span className={contactIconClassName}>
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-[#8d9a95]">Phone</span>
                    {phoneDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#d5deda]">
                <span className={contactIconClassName}>
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-[#8d9a95]">Location</span>
                  {location}
                </span>
              </li>
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClassName}
                >
                  <span className={contactIconClassName}>
                    <GitHubIcon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-[#8d9a95]">GitHub</span>
                    github.com/Abdul100-han
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClassName}
                >
                  <span className={contactIconClassName}>
                    <LinkedInIcon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-[#8d9a95]">LinkedIn</span>
                    Abdulsalam M. Abubakar
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10">
        <div
          className={cn(
            containerClassName,
            'flex flex-col gap-4 py-8 text-sm text-[#8d9a95] sm:flex-row sm:items-center sm:justify-between',
          )}
        >
          <p>© {new Date().getFullYear()} Abdulsalam Muhammad Abubakar.</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={textLinkClassName}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className={textLinkClassName}>
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
