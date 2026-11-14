/**
 * Portfolio projects committed in this repository.
 * Edit this file, then commit and push. See PROJECTS.md.
 * The homepage reads `getPublicProjects` and skips entries with published: false.
 *
 * Screenshots already in `public/` are referenced by their public path,
 * for example `/apn-niger.png`. New shots can go in `public/projects/`.
 * Leave URL fields unset until the address is real.
 */

export type ProjectCategory = 'production' | 'web3'

export type ProjectGroup = 'fullstack' | 'web' | 'mobile' | 'ai' | 'web3'

export type ProjectProminence = 'featured' | 'primary' | 'secondary'

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  /** Short text on the card. */
  summary: string
  /** Longer product description for the detail page. The card does not show this. */
  description?: string
  /** One line on the card about my work. Omit when that has not been written down. */
  contribution?: string
  /** Detail-page bullets. Omit when they would only repeat the card. */
  contributions?: readonly string[]
  /** One sentence on the detail page about my role. */
  role?: string
  /** Shown under the external link on the detail page, when the URL needs context. */
  linkNote?: string
  /** Extra detail-page sections. Other projects keep the standard layout. */
  sections?: readonly { title: string; paragraphs: readonly string[] }[]
  /** Grouped stack for the detail page. The card still uses `tags`. */
  stack?: readonly { label: string; items: readonly string[] }[]
  category: ProjectCategory
  /** Public category line on the card. */
  typeLabel: string
  groups: readonly ProjectGroup[]
  /** Short public status. Do not imply a live URL, audit, or store release here unless it is verified. */
  status?: string
  tags: readonly string[]
  repoUrl?: string
  liveUrl?: string
  /** Visible label for liveUrl. */
  liveLabel?: string
  caseStudyUrl?: string
  /** Contract, network, or testnet notes. Leave unset until those details are verified. */
  chainNotes?: string
  /** Local public path, for example `/apn-niger.png`. */
  coverImage?: string
  coverAlt?: string
  /** `contain` keeps a full screen in frame. Dashboard shots use the default crop from the top. */
  imageFit?: 'cover' | 'contain'
  /** Extra screenshots. The first is not repeated when it is already the cover. */
  images?: readonly ProjectImage[]
  featured: boolean
  prominence: ProjectProminence
  /** When true, `/projects/[slug]` is a real page. */
  hasDetail: boolean
  /** Lower numbers appear first. */
  sortOrder: number
  /** false keeps the project in this file and off the public page. */
  published: boolean
}

export const categoryLabel: Record<ProjectCategory, string> = {
  production: 'Production',
  web3: 'Blockchain & Web3',
}

export const projectFilters = [
  { id: 'all', label: 'All projects' },
  { id: 'fullstack', label: 'Full-stack & SaaS' },
  { id: 'web', label: 'Web & business applications' },
  { id: 'mobile', label: 'Mobile applications' },
  { id: 'ai', label: 'AI & automation' },
  { id: 'web3', label: 'Blockchain & Web3' },
] as const

export type ProjectFilter = (typeof projectFilters)[number]['id']

const projects: readonly Project[] = [
  {
    slug: 'apn-niger',
    title: 'APN Niger',
    summary:
      'A web and mobile platform for wallets, scheduled investment returns, a 30-day wealth fund, and rewards. More than 3,000 people use it.',
    description:
      'APN Niger is an investment and asset-management product on the web and in a mobile app. It handles wallets, automated return distributions, a fixed-term wealth fund, and a rewards program.',
    contribution:
      'I built the payout schedules, the wealth-fund lifecycle, and the React Native app, including English, French, and Hausa.',
    role: 'Software engineer on the financial workflows, the API, and the mobile app.',
    contributions: [
      'Built scheduled payouts for daily investment returns and fixed-term accruals, using the Africa/Niamey timezone.',
      'Built the 30-day Wealth Fund: opening a position, yield accrual, the countdown, maturity, release, and the admin tools around it.',
      'Worked on the financial ledger so wallet and payout records stay consistent.',
      'Built the user dashboards and the administrative interface.',
      'Built and maintained the React Native and Expo app.',
      'Added the interface in English, French, and Hausa.',
    ],
    linkNote: 'This opens the application sign-in, not a marketing page.',
    category: 'production',
    typeLabel: 'FinTech · Web and mobile',
    groups: ['fullstack', 'mobile'],
    status: 'In use',
    tags: [
      'Next.js',
      'React Native',
      'Node.js',
      'MySQL',
      'TypeScript',
      'Expo',
      'Express',
      'Tailwind CSS',
      'Node-Cron',
      'Vercel',
    ],
    liveUrl: 'https://apn-niger.vercel.app/login',
    liveLabel: 'Open application',
    coverImage: '/apn-niger.png',
    coverAlt:
      'APN Niger sign-in screen on a phone, with English, French, and Hausa language options.',
    imageFit: 'contain',
    featured: true,
    prominence: 'featured',
    hasDetail: true,
    sortOrder: 1,
    published: true,
  },
  {
    slug: 'rimboo',
    title: 'Rimboo Limited',
    summary:
      'An installable, offline-first PWA for multi-branch work: point of sale, inventory, ledgers, staff, and internal messages.',
    description:
      'Rimboo is an installable progressive web app for running more than one branch. It covers point of sale, inventory, specialized ledgers, staff, reporting, and internal communication, and it is built to keep working offline.',
    contribution:
      'I built the role-based dashboards, the branch ledgers, and a Gemini assistant for voice notes and sales reports.',
    role: 'Software engineer on the product, from the dashboards and ledgers through the assistant and permissions.',
    contributions: [
      'Built dashboards that show different reports to staff and to administrators.',
      'Implemented sales, expenses, cash and bank tracking, and debt collection.',
      'Built ledgers for personal and company loans, agricultural storage, and real-estate or construction expenses.',
      'Integrated a server-side Gemini assistant for voice notes, speech in more than one language, questions about the business data, PDF sales reports, and screen analysis.',
      'Built a document vault with file previews and video, staff attendance, and an internal chat with history, attachments, and voice notes.',
      'Set permissions on application routes and on the API.',
    ],
    category: 'production',
    typeLabel: 'Business operations · PWA',
    groups: ['fullstack', 'web', 'ai'],
    status: 'Production',
    tags: [
      'Next.js',
      'Node.js',
      'MySQL',
      'Gemini',
      'React',
      'TypeScript',
      'Express',
      'Tailwind CSS',
    ],
    liveUrl: 'https://rimbooltd.com.ng/',
    liveLabel: 'Visit website',
    coverImage: '/rimboo.png',
    coverAlt: 'Rimboo branch dashboard with sales, cash, expenses, and debt collection.',
    featured: true,
    prominence: 'featured',
    hasDetail: true,
    sortOrder: 2,
    published: true,
  },
  {
    slug: 'iltizaam-ai',
    title: 'ILTIZAAM',
    summary:
      'A productivity app for goals, daily plans, mood, focus time, and reminders. The Android app is on Google Play.',
    description:
      'ILTIZAAM is a personal productivity app for organizing the day, managing goals, and keeping a routine. I led the mobile application. The Android build is published on Google Play.',
    contribution:
      'I led the React Native and Expo app and connected it to the Node.js and Express API.',
    role: 'Lead mobile engineer on the React Native application.',
    contributions: [
      'Led the React Native and Expo application.',
      'Implemented goals, daily planning, mood tracking, focus mode, reminders, financial goals, and dashboards.',
      'Connected the app to the Node.js and Express API, including authentication and notifications.',
      'Published the Android app on Google Play.',
    ],
    linkNote: 'The website is the product site. The iOS App Store release is not claimed here.',
    category: 'production',
    typeLabel: 'Mobile · Productivity',
    groups: ['mobile', 'ai'],
    status: 'Android on Google Play',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express'],
    liveUrl: 'https://www.iltizaam.com/',
    liveLabel: 'Visit website',
    coverImage: '/iltizaam.png',
    coverAlt:
      'ILTIZAAM website with the mobile app showing today\u2019s progress and a lock-in action.',
    featured: false,
    prominence: 'primary',
    hasDetail: true,
    sortOrder: 3,
    published: true,
  },
  {
    slug: 'vennix-os',
    title: 'Vennix OS',
    summary:
      'Operations software for finance, inventory, customers, HR, payroll, and projects, with AI features in the product.',
    description:
      'Vennix OS is a business operations platform that brings finance, inventory, customers, team operations, and day-to-day workflows into one product. AI features sit inside that work.',
    contribution:
      'I worked on the frontend and backend, including payments, documents, customer portals, and permissions.',
    role: 'Software engineer across the frontend, backend, and business modules. I did not build the product alone.',
    contributions: [
      'Built frontend and backend functionality across the platform.',
      'Worked on CRM, sales, inventory, procurement, finance, HR, payroll, and project management.',
      'Implemented payments, document generation, customer portals, and notifications.',
      'Worked on access permissions and the product\u2019s AI features.',
    ],
    category: 'production',
    typeLabel: 'Business SaaS',
    groups: ['fullstack', 'ai'],
    status: 'Production',
    tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'TypeScript', 'Express'],
    liveUrl: 'https://vennix.vercel.app/',
    liveLabel: 'Visit website',
    coverImage: '/vennix.png',
    coverAlt: 'Vennix OS website homepage.',
    featured: false,
    prominence: 'primary',
    hasDetail: true,
    sortOrder: 4,
    published: true,
  },
  {
    slug: 'dan-ziyal-academy',
    title: 'Dan Ziyal Academy & Consultancy',
    summary:
      'A management platform for an academy and consultancy: dashboards, documents, projects, and billing.',
    description:
      'A web application for the operational work of an academy and consultancy business, used by administrators, staff, and clients.',
    contribution:
      'I built the dashboards, document sharing with public links, and billing with Paystack and PDFs.',
    role: 'Software engineer on the management platform.',
    contributions: [
      'Built administrator, staff, and client dashboards.',
      'Implemented authentication and role-based access.',
      'Built document sharing, including permissions, public links, and version history.',
      'Built project and task tracking.',
      'Worked on invoices, quotations, Paystack payments, PDF generation, and activity tracking.',
    ],
    linkNote:
      'This is the public website. The list above is the management platform I worked on, not a claim that every screen is on that homepage.',
    category: 'production',
    typeLabel: 'Business management',
    groups: ['web'],
    status: 'Production',
    tags: ['Next.js', 'React', 'TypeScript', 'MySQL', 'Paystack'],
    liveUrl: 'https://danziyalhub.com.ng/',
    liveLabel: 'Visit website',
    coverImage: '/danziyal-hub.png',
    coverAlt: 'Danziyal Hub administrator dashboard with projects, invoices, and documents.',
    featured: false,
    prominence: 'primary',
    hasDetail: true,
    sortOrder: 5,
    published: true,
  },
  {
    slug: 'shareef-nicehome',
    title: 'Shareef NiceHome',
    summary:
      'An inventory and sales system for products, stock movements, point of sale, customers, and invoices.',
    description:
      'An internal system for Shareef NiceHome Limited, used to manage products, stock, sales, and the records around them.',
    contribution:
      'I built the inventory and point-of-sale flows, plus authentication and role-based access.',
    role: 'Software engineer on the inventory and sales system.',
    contributions: [
      'Built product and inventory management, including stock movements.',
      'Implemented point-of-sale workflows.',
      'Worked on customer records, invoices, and reporting.',
      'Implemented authentication and role-based access.',
    ],
    linkNote:
      'This is the company website. The inventory system I worked on is an internal tool.',
    category: 'production',
    typeLabel: 'Inventory and POS',
    groups: ['web'],
    status: 'Production',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    liveUrl: 'https://www.shareefnicehome.com.ng/',
    liveLabel: 'Visit website',
    coverImage: '/shareef-nicehome-inventory.png',
    coverAlt: 'Shareef NiceHome inventory dashboard with products, stock, and sales.',
    featured: false,
    prominence: 'primary',
    hasDetail: true,
    sortOrder: 6,
    published: true,
  },
  {
    slug: 'farm-performance-intelligence',
    title: 'Epipy — Agricultural Operations & Farm Intelligence Platform',
    summary:
      'A web and mobile platform for farm operations, workforce coordination, task tracking, and financial records across multiple farm units.',
    description:
      'Epipy is an agricultural operations platform for farms that need one set of records in the office and in the field. Executives, accountants, managers, team leads, and field workers share a web dashboard and a mobile app. Team leads can also record work for field staff who do not have a phone.',
    contribution:
      'I built the role-based farm workflows, proxy task execution for field workers, QR reporting in the mobile app, and the financial registers.',
    role: 'Software engineer on the web dashboard, the React Native app, and the access, field, and finance workflows.',
    sections: [
      {
        title: 'Farm hierarchy and access control',
        paragraphs: [
          'Access is split across owners, executive directors, farm managers, accountants, team leads, and field workers. People are assigned through farm units and teams.',
          'Team leads manage only the units assigned to them. Farm managers can oversee more than one unit. Authorization is checked in shared middleware, rather than separately on each screen.',
        ],
      },
      {
        title: 'Field tasks and proxy execution',
        paragraphs: [
          'Some field workers do not have a personal phone. Team leads can assign their tasks and record progress for them, including a photo as evidence.',
          'Each action stores who performed it, so a proxy update is still attributable.',
        ],
      },
      {
        title: 'Mobile app and QR checkpoints',
        paragraphs: [
          'I built the companion app in React Native and Expo for iOS and Android. It uses the same backend as the web dashboard. In the field it provides a task board, camera scanning of QR checkpoints, and field reports.',
          'The API uses JWT. The app keeps the session in secure storage.',
        ],
      },
      {
        title: 'Financial and operational records',
        paragraphs: [
          'The registers cover expenses, with categories and a breakdown by farm unit, plus sales and accounts receivable. Executives can review those records together.',
        ],
      },
    ],
    stack: [
      { label: 'Web', items: ['React', 'Vite', 'Tailwind CSS', 'PWA'] },
      {
        label: 'Mobile',
        items: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'expo-secure-store', 'expo-camera'],
      },
      { label: 'Backend', items: ['Node.js', 'Express', 'JWT', 'RBAC'] },
      { label: 'Data', items: ['PostgreSQL', 'Supabase Storage'] },
    ],
    category: 'production',
    typeLabel: 'Agriculture · Web and mobile',
    groups: ['fullstack', 'web', 'mobile'],
    status: 'Production',
    tags: [
      'React Native',
      'Expo',
      'Node.js',
      'PostgreSQL',
      'React',
      'Vite',
      'Tailwind CSS',
      'PWA',
      'Expo Router',
      'TypeScript',
      'expo-secure-store',
      'expo-camera',
      'Express',
      'JWT',
      'RBAC',
      'Supabase Storage',
    ],
    liveUrl: 'https://www.epipy.com/',
    liveLabel: 'Visit website',
    coverImage: '/epipy.png',
    coverAlt:
      'Epipy farm operations dashboard with farm structure, tasks, expenses, sales, and QR checkpoints.',
    featured: false,
    prominence: 'primary',
    hasDetail: true,
    sortOrder: 7,
    published: true,
  },
  {
    slug: 'alkhair-press',
    title: 'Alkhair Press',
    summary:
      'A site and operations platform for a printing and publishing business, with an AI assistant for customer support.',
    description:
      'A digital platform for Alkhair Press, a printing and publishing business. It supports the public site and internal operations, including customer support.',
    contribution:
      'I worked on the frontend, the support assistant\u2019s retrieval and search, and security improvements.',
    role: 'Software engineer on the web platform and the support assistant.',
    contributions: [
      'Developed frontend features and backend integrations.',
      'Worked on customer support with retrieval-augmented generation, semantic search, and conversation handling.',
      'Contributed to security improvements in the application.',
    ],
    category: 'production',
    typeLabel: 'Publishing · AI support',
    groups: ['web', 'ai'],
    status: 'Production',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'OpenAI'],
    liveUrl: 'https://alkhairpress.com.ng/',
    liveLabel: 'Visit website',
    featured: false,
    prominence: 'secondary',
    hasDetail: true,
    sortOrder: 8,
    published: true,
  },
  {
    slug: 'fixkano',
    title: 'FixKano',
    summary:
      'A civic platform for reporting local issues with a photo and a location, then tracking what happens to the report.',
    description:
      'FixKano connects people with government agencies through location-based issue reports. A report can include a photo, an account, a status, and an administrative workflow.',
    contribution:
      'I led delivery of the mobile app, the web interface, and the backend integration.',
    role: 'Technical lead across the mobile app, web interface, and backend.',
    contributions: [
      'Led technical work on the mobile app, the web interface, and the backend integration, including testing and deployment.',
      'The product covers photo reports, geolocation, accounts, issue tracking, status updates, and administrative workflows.',
    ],
    category: 'production',
    typeLabel: 'Civic reporting',
    groups: ['mobile', 'web'],
    status: 'Production',
    tags: ['React Native', 'React', 'Node.js', 'Geolocation'],
    featured: false,
    prominence: 'secondary',
    hasDetail: true,
    sortOrder: 9,
    published: true,
  },
  {
    slug: 'kantin-kwari-market-id',
    title: 'Kantin Kwari Market ID',
    summary:
      'Identity and records software for a market of more than 5,000 members, including BVN registration, unique IDs, and QR verification.',
    description:
      'A market identification and records platform for more than 5,000 members. It supports BVN-based registration, unique IDs, QR-code verification, bulk ID-card printing, administrative dashboards, and PDF and Excel exports.',
    category: 'production',
    typeLabel: 'Identity records',
    groups: ['web'],
    status: 'Production',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'MySQL', 'QR verification'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 10,
    published: true,
  },
  {
    slug: 'stedi-ai',
    title: 'STEDi-AI Framework',
    summary:
      'A backend that evaluates security technical debt across OpenAI, Gemini, and Hugging Face.',
    description:
      'STEDi-AI is a framework for evaluating security technical debt. I worked on the backend services that run those evaluations.',
    contribution:
      'I built and maintained the FastAPI backend, the evaluation calculations, and JWT/OAuth on the API.',
    role: 'Software engineer on the backend. The work was a contract.',
    contributions: [
      'Built and maintained the Python and FastAPI backend.',
      'Wrote evaluation workflows for OpenAI, Gemini, and Hugging Face, including the security technical debt calculations.',
      'Implemented API authentication with JWT and OAuth.',
    ],
    category: 'production',
    typeLabel: 'Security analysis · AI',
    groups: ['ai'],
    status: 'Contract',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Gemini', 'Hugging Face', 'Next.js'],
    featured: false,
    prominence: 'secondary',
    hasDetail: true,
    sortOrder: 11,
    published: true,
  },
  // TODO: Confirm the description, contribution, stack, and screenshot before publishing.
  {
    slug: 'invoice-management',
    title: 'Invoice Management Platform',
    summary:
      'TODO: Add a verified description, contribution, technologies, and screenshot before publishing.',
    category: 'production',
    typeLabel: 'Business software',
    groups: ['web'],
    tags: [],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 12,
    published: false,
  },
  {
    slug: 'nft-marketplace',
    title: 'NFT Marketplace DApp',
    summary:
      'A personal project with Solidity contracts and a Next.js interface for listings, purchases, and connecting a wallet.',
    category: 'web3',
    typeLabel: 'Personal project',
    groups: ['web3'],
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'EVM', 'Web3'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 13,
    published: true,
  },
  {
    slug: 'crowdfunding',
    title: 'Crowdfunding DApp',
    summary:
      'A personal project for creating campaigns, tracking contributions, and withdrawing funds, with Solidity contracts and a Next.js front end.',
    category: 'web3',
    typeLabel: 'Personal project',
    groups: ['web3'],
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'TypeScript'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 14,
    published: true,
  },
  {
    slug: 'dao-voting',
    title: 'DAO Voting DApp',
    summary:
      'A personal project for creating proposals and voting on them. The contracts are Solidity, and the interface is Next.js.',
    category: 'web3',
    typeLabel: 'Personal project',
    groups: ['web3'],
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Web3'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 15,
    published: true,
  },
  {
    slug: 'erc-20-token-forge',
    title: 'ERC-20 Token Forge',
    summary:
      'A personal project for creating an ERC-20 token with OpenZeppelin, connecting a wallet, and deploying it to a testnet.',
    category: 'web3',
    typeLabel: 'Personal project',
    groups: ['web3'],
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'OpenZeppelin', 'Next.js'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 16,
    published: true,
  },
  // TODO: Confirm the stack, repository, and whether a frontend or testnet deployment exists.
  {
    slug: 'nft-minting',
    title: 'NFT Minting DApp',
    summary: 'A personal project for minting NFTs from a Solidity contract.',
    category: 'web3',
    typeLabel: 'Personal project',
    groups: ['web3'],
    status: 'Personal project',
    tags: ['Solidity', 'ERC-721'],
    featured: false,
    prominence: 'secondary',
    hasDetail: false,
    sortOrder: 17,
    published: true,
  },
]

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getPublicProjects(): Project[] {
  return getAllProjects().filter((project) => project.published)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return getPublicProjects().filter((project) => project.category === category)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getDetailProjects(): Project[] {
  return getPublicProjects().filter((project) => project.hasDetail)
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null
  next: Project | null
} {
  const list = getDetailProjects()
  const index = list.findIndex((project) => project.slug === slug)

  return {
    previous: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  }
}

export function getProjectCover(project: Project): ProjectImage | null {
  if (project.coverImage) {
    return {
      src: project.coverImage,
      alt: project.coverAlt ?? `${project.title} screenshot`,
    }
  }

  return project.images?.[0] ?? null
}

export function getProjectGallery(project: Project): ProjectImage[] {
  const cover = getProjectCover(project)
  const extras = (project.images ?? []).filter((image) => image.src !== cover?.src)
  if (!cover) return extras
  return [cover, ...extras]
}
