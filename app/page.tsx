import {
  Check,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  WalletCards,
} from 'lucide-react'

import { ProjectCard } from '@/components/project-card'
import { SiteNav } from '@/components/site-nav'
import { getProjectsByCategory } from '@/lib/projects'

const email = 'abdulmuhd857@gmail.com'
const sectionClassName = 'scroll-mt-24 mx-auto w-full max-w-6xl px-6 py-16 md:py-20 lg:px-8'

const focusAreas = [
  'Web and mobile products, from the interface through the API',
  'Solidity contracts tested with Foundry',
  'Releases on Google Play and the App Store',
  'Model API integrations with OpenAI, Gemini, and Hugging Face',
]

const skillGroups = [
  {
    title: 'Frontend development',
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
    title: 'Mobile development',
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
    title: 'Backend and APIs',
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
    title: 'Databases and infrastructure',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Prisma',
      'Firebase',
      'Appwrite',
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
  {
    title: 'Blockchain',
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
  'inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#07110d] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 motion-reduce:transition-none'

const secondaryCtaClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transition-none'

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
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#b7c2bd]">{description}</p>
    </div>
  )
}

export default function Page() {
  const productionProjects = getProjectsByCategory('production')
  const personalProjects = getProjectsByCategory('personal')

  return (
    <main className="min-h-screen bg-[#080b0d] text-[#f3f6f4] selection:bg-emerald-400/30 selection:text-emerald-100">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-emerald-400 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#07110d]"
      >
        Skip to content
      </a>
      <SiteNav />
      <section id="top" className={`${sectionClassName} pt-14 md:pt-20`}>
        <p className="text-sm font-medium text-emerald-300">Abdulsalam M. Abubakar</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          I build web apps, mobile apps, and APIs.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#b7c2bd] sm:text-lg sm:leading-8">
          I use React Native and Expo for mobile, Next.js and Node.js for web
          applications, and Solidity for smart contracts. I like taking a
          product from the first working version through to release.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className={primaryCtaClassName}>
            View projects
          </a>
          <a href="#contact" className={secondaryCtaClassName}>
            Get in touch
          </a>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-[#8d9a95]">
          Kano, Nigeria · Open to remote roles and contract work. Iltizaam is on
          Google Play and the App Store.
        </p>
      </section>

      <section id="about" className={`${sectionClassName} border-t border-white/10`}>
        <SectionIntro
          eyebrow="01 / About"
          title="Mobile, web, APIs, and Solidity."
          description="I work across mobile applications, web platforms, backend APIs, model integrations, and smart contracts. I helped lead Iltizaam, a React Native app, through release on Google Play and the App Store. On Vennix I integrated Paystack, document generation, and a customer portal. I also led delivery of FixKano, a civic reporting platform, and built a FastAPI service that runs evaluations across OpenAI, Gemini, and Hugging Face. I write Solidity and test it with Foundry."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-[#d5deda]"
            >
              <Check className="mt-1 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className={sectionClassName}>
        <SectionIntro
          eyebrow="02 / Skills"
          title="Technologies I work with"
          description="The languages, frameworks, and tools behind the projects and roles on this page."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <article
                key={group.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="size-4 text-emerald-300" aria-hidden="true" />
                  <h3 className="font-medium text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-[#c5d0cc]"
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

      <section id="projects" className={`${sectionClassName} border-t border-white/10`}>
        <SectionIntro
          eyebrow="03 / Projects"
          title="Selected projects"
          description="Production work I have shipped or helped build, then personal Solidity projects."
        />
        <h3 className="mb-5 text-lg font-semibold text-white">Production work</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {productionProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mb-5 mt-14 max-w-2xl">
          <h3 className="text-lg font-semibold text-white">Personal blockchain projects</h3>
          <p className="mt-2 text-sm leading-6 text-[#b7c2bd]">
            Solidity contracts, Foundry tests, and wallet connections.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className={sectionClassName}>
        <SectionIntro
          eyebrow="04 / Experience"
          title="Experience"
          description="Mobile, SaaS, AI infrastructure, business software, and civic technology."
        />
        <div className="rounded-xl border border-white/10">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="border-b border-white/10 p-6 last:border-b-0 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <p className="text-sm text-[#8d9a95]">{job.meta}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-emerald-300">{job.company}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-6 text-[#b7c2bd]">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-[#8d9a95]" aria-hidden="true">
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-[#c5d0cc]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className={`${sectionClassName} border-t border-white/10`}>
        <SectionIntro
          eyebrow="05 / Education"
          title="Education and training"
          description="Blockchain training from Cyfrin Updraft and Alchemy University, and an HND in Mechanical Engineering from Kano State Polytechnic."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
              Training
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold text-white">Cyfrin Updraft</h4>
                <p className="mt-2 text-sm leading-6 text-[#b7c2bd]">
                  Blockchain Developer, Smart Contract & Solidity Career Path
                  (Foundry Edition).
                </p>
                <p className="mt-3 text-xs leading-5 text-[#8d9a95]">
                  Solidity · EVM · Foundry · Chainlink · DeFi · Gas optimization ·
                  Auditing
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Alchemy University</h4>
                <p className="mt-2 text-sm leading-6 text-[#b7c2bd]">
                  Blockchain / Ethereum Developer Program focused on Web3
                  infrastructure and dApp architecture.
                </p>
                <p className="mt-3 text-xs leading-5 text-[#8d9a95]">
                  Ethereum · Web3 infrastructure · dApp architecture
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
              Formal education
            </h3>
            <h4 className="mt-6 text-lg font-semibold leading-7 text-white">
              Higher National Diploma (HND)
            </h4>
            <p className="mt-2 text-sm leading-6 text-[#b7c2bd]">
              Mechanical Engineering (Plant & Power)
            </p>
            <p className="mt-4 text-xs leading-5 text-[#8d9a95]">
              Kano State Polytechnic · Kano, Nigeria
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className={sectionClassName}>
        <SectionIntro
          eyebrow="06 / Contact"
          title="Open to roles and project work"
          description="I am open to engineering roles and to conversations about software you want built. Email is the way to reach me."
        />
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <a href={`mailto:${email}`} className={primaryCtaClassName}>
            <Mail className="size-4" aria-hidden="true" />
            {email}
          </a>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <li>
              <a
                href="tel:+2348039688857"
                className="flex items-center gap-3 rounded-md text-sm text-[#d5deda] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <Phone className="size-4 text-emerald-300" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-[#8d9a95]">Phone</span>
                  +234 803 968 8857
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-[#d5deda]">
              <MapPin className="size-4 text-emerald-300" aria-hidden="true" />
              <span>
                <span className="block text-xs text-[#8d9a95]">Location</span>
                Kano, Nigeria · Open to remote work and relocation
              </span>
            </li>
            <li>
              <a
                href="https://github.com/Abdul100-han"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md text-sm text-[#d5deda] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/abdulsalam-muhammad-abubakar-90375a1ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md text-sm text-[#d5deda] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#8d9a95] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abdulsalam Muhammad Abubakar.</p>
          <div className="flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </footer>
    </main>
  )
}
