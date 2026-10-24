import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Smartphone,
  Sparkles,
  WalletCards,
} from 'lucide-react'

import { ProjectCard } from '@/components/project-card'
import { SiteNav } from '@/components/site-nav'
import { getProjectsByCategory } from '@/lib/projects'

const email = 'abdulmuhd857@gmail.com'

const highlights = [
  {
    title: 'Play Store and App Store',
    detail: 'Iltizaam is published on both',
  },
  {
    title: 'Web and mobile',
    detail: 'Next.js, Node.js, and React Native',
  },
  {
    title: 'Solidity and Foundry',
    detail: 'Contracts I write and test',
  },
]

const focusAreas = [
  'Web and mobile products, from the interface through the API',
  'Solidity contracts tested with Foundry',
  'Releases on Google Play and the App Store',
  'Model API integrations with OpenAI, Gemini, and Hugging Face',
]

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      'React Native',
      'Expo',
      'TypeScript',
      'EAS Build/Submit',
      'NativeWind',
      'Android',
      'iOS',
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layers3,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/UI',
      'Redux Toolkit',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Code2,
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI (Python)',
      'REST APIs',
      'WebSockets',
      'Axios',
      'Event-Driven Architecture',
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: WalletCards,
    skills: [
      'Solidity',
      'Foundry/Forge',
      'Ethereum & EVM',
      'OpenZeppelin',
      'Chainlink',
      'Web3/dApp Development',
      'WalletConnect',
      'Smart Contract Testing',
    ],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Firebase', 'Appwrite'],
  },
  {
    title: 'DevOps & Tools',
    icon: Rocket,
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'Postman',
      'Cursor',
      'Play Console',
      'App Store Connect',
    ],
  },
]

const experience = [
  {
    role: 'Mobile App Developer / Lead Mobile Engineer',
    company: 'ILTIZAM AI',
    meta: 'Lagos, Nigeria · Contract',
    points: [
      'Led end-to-end development of a production React Native/Expo app for goals, AI motivation, mood tracking, and focus mode.',
      'Integrated Node.js/Express APIs with state management, validation, error handling, and push notifications.',
      'Built and published production releases on Google Play Store and Apple App Store.',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'App Store Connect'],
  },
  {
    role: 'Software Engineer',
    company: 'Epipy Limited',
    meta: 'Abuja, Nigeria',
    points: [
      'Developed a multi-tenant Farm Performance Intelligence Platform for farm operations and analytics.',
      'Implemented role-based access, SOP repositories, task workflows, and audit logging.',
    ],
    tags: ['PostgreSQL', 'Next.js', 'TypeScript', 'RBAC', 'Audit Systems'],
  },
  {
    role: 'Software Engineer',
    company: 'STEDI-AI Framework',
    meta: 'Doha, Qatar · Contract',
    points: [
      'Built and maintained a FastAPI backend for security technical debt analysis across OpenAI, Gemini, and Hugging Face.',
      'Designed multi-provider evaluation logic, security calculations, and production JWT/OAuth authentication.',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'OpenAI', 'Gemini'],
  },
  {
    role: 'Software Engineer',
    company: 'Vennix OS',
    meta: 'Kano, Nigeria · Contract',
    points: [
      'Architected an AI-powered business operations platform covering CRM, finance, HR, payroll, projects, and reporting.',
      'Integrated Paystack payments, document generation, customer portals, and AI business insights.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'AI Integrations'],
  },
  {
    role: 'Software Engineer / Technical Lead',
    company: 'FixKano Platform',
    meta: 'Kano, Nigeria · Contract',
    points: [
      'Led technical delivery of a civic technology platform connecting citizens and government agencies through geolocation-based reporting.',
    ],
    tags: ['React Native', 'React', 'Node.js', 'REST APIs', 'Geolocation'],
  },
]

const primaryCtaClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#07110d] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 motion-reduce:transition-none'

const secondaryCtaClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-emerald-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none'

const textLinkClassName =
  'rounded-md hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300'

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#8d9a95]">{description}</p>
    </div>
  )
}

export default function Page() {
  const productionProjects = getProjectsByCategory('production')
  const personalProjects = getProjectsByCategory('personal')

  return (
    <main className="min-h-screen bg-[#080b0d] text-[#f3f6f4] selection:bg-emerald-400/30 selection:text-emerald-100">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1100px] bg-[radial-gradient(ellipse_at_55%_8%,rgba(16,185,129,0.13),transparent_48%),radial-gradient(ellipse_at_5%_40%,rgba(34,211,238,0.07),transparent_35%)]" />
        <SiteNav />
        <section
          id="top"
          className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-16"
        >
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-300/90">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Software engineer · Mobile, web, and Solidity
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Mobile apps, web platforms, and{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">
                smart contracts
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#98a39f] sm:text-lg sm:leading-8">
              I build mobile apps with React Native and Expo, web applications
              with Next.js and Node.js, and smart contracts with Solidity. I
              like taking a product from the first working version through to
              release.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className={primaryCtaClassName}>
                View projects
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a href="#contact" className={secondaryCtaClassName}>
                Get in touch
              </a>
            </div>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-1 gap-6 border-y border-white/[0.09] py-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.09]">
            {highlights.map((item) => (
              <li key={item.title} className="sm:px-7 sm:first:pl-0">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 max-w-[220px] text-xs leading-5 text-[#7d8985]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-white/[0.08] px-6 py-24 lg:px-10"
      >
        <SectionIntro
          eyebrow="01 / About"
          title="Mobile, web, APIs, and Solidity."
          description="I work across mobile applications, web platforms, backend APIs, model integrations, and smart contracts. I helped lead Iltizaam, a React Native app, through release on Google Play and the App Store. On Vennix I integrated Paystack, document generation, and a customer portal. I also led delivery of FixKano, a civic reporting platform, and built a FastAPI service that runs evaluations across OpenAI, Gemini, and Hugging Face. I write Solidity and test it with Foundry."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm leading-6 text-[#bbc5c0]"
            >
              <Check className="mt-1 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionIntro
          eyebrow="02 / Technical Skills"
          title="Technologies I work with"
          description="The languages, frameworks, and tools behind the projects and roles on this page."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-medium text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-xs text-[#aab5b0]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionIntro
          eyebrow="03 / Selected Work"
          title="Selected projects"
          description="Production work I have shipped or helped build, then personal Solidity projects."
        />
        <h3 className="mb-5 text-xl font-semibold text-white">Production work</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {productionProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mb-5 mt-16 max-w-2xl">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
            <WalletCards className="size-5 text-cyan-300" aria-hidden="true" />
            Personal blockchain projects
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#8d9a95]">
            Solidity contracts, Foundry tests, and wallet connections.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <SectionIntro
          eyebrow="04 / Experience"
          title="Experience"
          description="Mobile, SaaS, AI infrastructure, business software, and civic technology."
        />
        <div className="relative ml-3 border-l border-emerald-300/20 pl-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="relative mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 last:mb-0"
            >
              <span className="absolute -left-[41px] top-7 size-3 rounded-full border-2 border-[#080b0d] bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <p className="text-sm font-medium text-emerald-300">{job.company}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-white">
                    {job.role}
                  </h3>
                </div>
                <span className="flex items-center gap-2 text-xs text-[#7f8d87]">
                  <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
                  {job.meta}
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-sm leading-6 text-[#9ca9a4]">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-emerald-300" aria-hidden="true">
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-[#9aa7a2]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-7xl border-t border-white/[0.08] px-6 py-24 lg:px-10"
      >
        <SectionIntro
          eyebrow="05 / Education & Certifications"
          title="Education and training"
          description="Blockchain training from Cyfrin Updraft and Alchemy University, and an HND in Mechanical Engineering from Kano State Polytechnic."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.04] p-6 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Specialized Training & Certifications
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Cyfrin Updraft</h3>
                <p className="mt-2 text-sm leading-6 text-[#9ca9a4]">
                  Blockchain Developer, Smart Contract & Solidity Career Path
                  (Foundry Edition).
                </p>
                <p className="mt-3 text-xs leading-5 text-[#718079]">
                  Solidity · EVM · Foundry · Chainlink · DeFi · Gas optimization ·
                  Auditing
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Alchemy University</h3>
                <p className="mt-2 text-sm leading-6 text-[#9ca9a4]">
                  Blockchain / Ethereum Developer Program focused on Web3
                  infrastructure and dApp architecture.
                </p>
                <p className="mt-3 text-xs leading-5 text-[#718079]">
                  Ethereum · Web3 infrastructure · dApp architecture
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Formal Education
            </p>
            <h3 className="mt-6 text-lg font-semibold leading-7 text-white">
              Higher National Diploma (HND)
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#9ca9a4]">
              Mechanical Engineering (Plant & Power)
            </p>
            <p className="mt-4 text-xs leading-5 text-[#718079]">
              Kano State Polytechnic · Kano, Nigeria
            </p>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-white/[0.08] px-6 py-24 lg:px-10"
      >
        <SectionIntro
          eyebrow="06 / Contact"
          title="Open to roles and project work"
          description="I am open to engineering roles and to conversations about software you want built. Email is the way to reach me."
        />
        <a href={`mailto:${email}`} className={primaryCtaClassName}>
          <Mail className="size-4" aria-hidden="true" />
          {email}
        </a>
        <ul className="mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          <li>
            <a
              href={`tel:+2348039688857`}
              className="group flex items-center gap-4 rounded-md text-sm text-[#bbc5c0] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-emerald-300 group-hover:border-emerald-300/30">
                <Phone className="size-4" aria-hidden="true" />
              </span>
              +234 803 968 8857
            </a>
          </li>
          <li className="flex items-center gap-4 text-sm text-[#bbc5c0]">
            <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-emerald-300">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            Kano, Nigeria · Open to remote work and relocation
          </li>
          <li>
            <a
              href="https://github.com/Abdul100-han"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-white/10 px-3 py-2 text-xs text-[#9ca9a4] hover:border-emerald-300/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/abdulsalam-muhammad-abubakar-90375a1ba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-white/10 px-3 py-2 text-xs text-[#9ca9a4] hover:border-emerald-300/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs text-[#718079] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abdulsalam Muhammad Abubakar.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#top" className={textLinkClassName}>
              Top
            </a>
            <a href="#about" className={textLinkClassName}>
              About
            </a>
            <a href="#projects" className={textLinkClassName}>
              Projects
            </a>
            <a href="#experience" className={textLinkClassName}>
              Experience
            </a>
            <a href="#contact" className={textLinkClassName}>
              Contact
            </a>
            <a href="#top" className={`${textLinkClassName} text-emerald-300 hover:text-emerald-200`}>
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
