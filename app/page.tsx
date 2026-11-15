import { Mail, MapPin, Phone } from 'lucide-react'

import { ProjectShowcase, Web3FilterLink } from '@/components/project-showcase'
import { SiteNav } from '@/components/site-nav'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import {
  aboutParagraphs,
  availability,
  email,
  experience,
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

const containerClassName = 'mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8'

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
    <section id={id} className={cn('scroll-mt-20 border-t border-white/10', className)}>
      <div className={cn(containerClassName, 'py-12 sm:py-16 md:py-24')}>{children}</div>
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
      <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-balance text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-7 text-pretty text-[#b7c2bd]">{children}</div>
      ) : null}
    </div>
  )
}

function ExperienceItem({ job }: { job: Role }) {
  return (
    <li className="flex min-w-0">
      <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1312] p-5 transition-colors duration-200 hover:border-emerald-300/30 sm:p-6 motion-reduce:transition-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent"
        />
        <header>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-balance text-white">
            {job.organization}
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-[#d5deda]">{job.role}</p>
          {job.meta ? (
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[#8d9a95]">
              {job.meta}
            </p>
          ) : null}
        </header>
        {job.points?.length ? (
          <ul className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5">
            {job.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-[#c5d0cc]">
                <span
                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-emerald-300"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {job.tags?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {job.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-100"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  )
}

export default function Page() {
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
        <section id="top" className="scroll-mt-20">
          <div
            className={cn(
              containerClassName,
              'grid items-center gap-8 pb-12 pt-8 sm:gap-10 sm:pb-14 sm:pt-12 md:pb-16 md:pt-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]',
            )}
          >
            <div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="size-44 overflow-hidden rounded-full border border-white/10 bg-[#121816] sm:size-52 lg:hidden">
                  <img
                    src="/me-2.jpeg"
                    alt="Portrait of Abdulsalam M. Abubakar"
                    width={416}
                    height={416}
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                </div>
                <div className="mt-5 lg:mt-0">
                  <p className="text-sm font-medium text-emerald-300 sm:text-base">
                    Abdulsalam M. Abubakar
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[#9aa6a1] lg:hidden">
                    Software Engineer
                  </p>
                </div>
              </div>
              <p className="mt-4 hidden flex-wrap gap-x-2 gap-y-1 text-sm leading-5 text-[#9aa6a1] lg:flex">
                <span className="whitespace-nowrap">Software Engineer</span>
                <span className="whitespace-nowrap">· Full-stack & mobile</span>
                <span className="whitespace-nowrap">· Blockchain & Web3</span>
              </p>
              <h1 className="mt-6 max-w-3xl text-[1.875rem] font-semibold leading-[1.15] tracking-[-0.03em] text-balance text-white sm:mt-8 sm:text-4xl sm:leading-[1.12] lg:text-[3.35rem] lg:leading-[1.08]">
                Software Engineer building web, mobile & full-stack products.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-pretty text-[#b7c2bd] sm:mt-5 sm:text-lg sm:leading-8">
                I have 5 years of experience building software, from business platforms
                and mobile applications to backend systems and AI-powered products. I
                work across the stack, turning product requirements into reliable
                applications that are ready for real-world use.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key technologies">
                {heroTechnologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-white/10 px-2.5 py-1 text-sm text-[#d5deda]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a href="#projects" className={cn(primaryCtaClassName, 'w-full sm:w-auto')}>
                  View My Work
                </a>
                <a href="#contact" className={cn(secondaryCtaClassName, 'w-full sm:w-auto')}>
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

            <div className="hidden lg:block">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121816]">
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

        <section id="highlights" className="scroll-mt-20 border-t border-white/10">
          <div className={cn(containerClassName, 'py-2 sm:py-8 md:py-10')}>
            <h2 className="sr-only">Professional highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4 lg:gap-0">
              {highlights.map((item, index) => (
                <li
                  key={item.value}
                  className={cn(
                    'border-b border-white/10 py-4 last:border-b-0 sm:border-b-0 sm:py-0 lg:px-8',
                    index > 0 && 'lg:border-l lg:border-white/10',
                    index === 0 && 'lg:pl-0',
                    index === highlights.length - 1 && 'lg:pr-0',
                  )}
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#b7c2bd] sm:mt-2">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="projects">
          <SectionIntro eyebrow="Selected work" title="Selected projects">
            <p>
              Products I have helped build: financial platforms, business systems, mobile apps,
              and AI features. Personal smart-contract work is under Blockchain &amp; Web3.
            </p>
          </SectionIntro>
          <ProjectShowcase />
        </Section>

        <Section id="experience">
          <SectionIntro eyebrow="Career" title="Professional experience">
            <p>
              Roles across mobile products, business platforms, AI systems, and civic
              technology.
            </p>
          </SectionIntro>
          <ul className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            {experience.map((job) => (
              <ExperienceItem key={`${job.organization}-${job.role}`} job={job} />
            ))}
          </ul>
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
          <Web3FilterLink />
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
          <SectionIntro eyebrow="Training" title="Professional development" />
          <div className="max-w-3xl divide-y divide-white/10 border-t border-white/10">
            {training.map((item) => (
              <div key={item.provider} className="py-5">
                <h3 className="text-lg font-semibold text-white">{item.provider}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d5deda]">{item.program}</p>
                {'status' in item && item.status ? (
                  <p className="mt-2 text-sm text-emerald-300">{item.status}</p>
                ) : null}
                <p className="mt-2 text-sm leading-6 text-[#8d9a95]">{item.topics}</p>
              </div>
            ))}
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
            <a href={`mailto:${email}`} className={cn(primaryCtaClassName, 'w-full sm:w-auto')}>
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
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={textLinkClassName}>
                {item.label}
              </a>
            ))}
            <a href="/#contact" className={textLinkClassName}>
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
