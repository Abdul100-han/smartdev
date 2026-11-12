/**
 * Portfolio projects committed in this repository.
 * Edit this file, then commit and push. See PROJECTS.md.
 * The homepage reads `getPublicProjects` and skips entries with published: false.
 *
 * Add a real screenshot by placing a file in `public/projects/` and setting
 * `coverImage` to its public path, for example `/projects/iltizaam.png`.
 * Extra shots go in `images`. Leave URL fields unset until the address is real.
 */

export type ProjectCategory = 'production' | 'web3'

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  /** Longer notes for the local preview. The public card uses `summary`. */
  description?: string
  /** What I did on this project. Omitted when that has not been written down. */
  contribution?: string
  category: ProjectCategory
  /** Short public status. Do not imply a live URL, audit, or store release here unless it is verified. */
  status?: string
  tags: readonly string[]
  repoUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  /** Contract, network, or testnet notes. Leave unset until those details are verified. */
  chainNotes?: string
  /** Local public path, for example `/projects/iltizaam.png`. */
  coverImage?: string
  /** Extra screenshots. The first is not repeated when it is already the cover. */
  images?: readonly ProjectImage[]
  featured: boolean
  /** Lower numbers appear first within a category. */
  sortOrder: number
  /** false keeps the project in this file and off the public page. */
  published: boolean
}

export const categoryLabel: Record<ProjectCategory, string> = {
  production: 'Production',
  web3: 'Blockchain & Web3',
}

const projects: readonly Project[] = [
  {
    slug: 'iltizaam-ai',
    title: 'Iltizaam AI',
    summary:
      'An accountability and productivity application for managing goals, planning the day, tracking mood, staying focused, and building consistent habits.',
    contribution:
      'I led the React Native and Expo application. That included goal creation and breakdown, daily planning, mood tracking, focus mode, reminders, financial goals, dashboards, authentication, notifications, and the backend API integration.',
    category: 'production',
    status: 'Published on Google Play',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'AI APIs',
    ],
    featured: true,
    sortOrder: 1,
    published: true,
  },
  {
    slug: 'vennix-os',
    title: 'Vennix OS',
    summary:
      'A business operations platform for CRM, sales, inventory, procurement, finance, HR, payroll, projects, documents, and reporting.',
    contribution:
      'I worked across the frontend, backend, APIs, database, authentication, authorization, and business logic. My work included payment processing, document generation, customer portals, notifications, granular permissions, and AI-powered business features.',
    category: 'production',
    status: 'Production',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'REST APIs',
      'AI integrations',
    ],
    featured: true,
    sortOrder: 2,
    published: true,
  },
  {
    slug: 'kantin-kwari-market-id',
    title: 'Kantin Kwari Market ID Management System',
    summary:
      'A market identification and records platform for more than 5,000 members. It supports BVN-based registration, unique IDs, QR-code verification, bulk ID-card printing, administrative dashboards, and PDF and Excel exports.',
    category: 'production',
    status: 'Production',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'MySQL', 'QR verification'],
    featured: false,
    sortOrder: 3,
    published: true,
  },
  {
    slug: 'fixkano',
    title: 'FixKano',
    summary:
      'A civic platform that connects citizens with government agencies through location-based issue reporting, including photos, geolocation, accounts, issue tracking, status updates, and administrative workflows.',
    contribution:
      'I led technical delivery across the mobile application, web interface, backend integration, testing, and deployment.',
    category: 'production',
    status: 'Production',
    tags: ['React Native', 'React', 'Node.js', 'REST APIs', 'Geolocation'],
    featured: false,
    sortOrder: 4,
    published: true,
  },
  {
    slug: 'alkhair-press',
    title: 'Alkhair Press',
    summary:
      'A full-stack business management and e-commerce platform with AI-powered customer support.',
    contribution:
      'I worked on the frontend, backend integrations, AI customer support, RAG-based knowledge retrieval, semantic search, conversation management, and security improvements.',
    category: 'production',
    status: 'Production',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MySQL',
      'OpenAI',
      'RAG',
      'Embeddings',
    ],
    featured: false,
    sortOrder: 5,
    published: true,
  },
  {
    slug: 'farm-performance-intelligence',
    title: 'Farm Performance Intelligence Platform',
    summary:
      'A multi-tenant SaaS platform for farm operations, workforce activity, and performance analytics.',
    contribution:
      'I worked on farm structures, role-based access, task workflows, proof-of-work submissions, SOP repositories, document versioning, audit logging, and operational dashboards.',
    category: 'production',
    status: 'Production',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'SaaS', 'RBAC'],
    featured: false,
    sortOrder: 6,
    published: true,
  },
  // TODO: Confirm the description, contribution, stack, and screenshot before publishing.
  {
    slug: 'dan-ziyal-academy',
    title: 'Dan Ziyal Academy & Consultancy',
    summary:
      'TODO: Add a verified description, contribution, technologies, and screenshot before publishing.',
    category: 'production',
    tags: [],
    featured: false,
    sortOrder: 7,
    published: false,
  },
  // TODO: Confirm the description, contribution, stack, and screenshot before publishing.
  {
    slug: 'shareef-nicehome',
    title: 'Shareef NiceHome Inventory and Sales Management System',
    summary:
      'TODO: Add a verified description, contribution, technologies, and screenshot before publishing.',
    category: 'production',
    tags: [],
    featured: false,
    sortOrder: 8,
    published: false,
  },
  // TODO: Confirm the public project write-up. The role itself is described in lib/profile.ts.
  {
    slug: 'stedi-ai',
    title: 'STEDi-AI Framework',
    summary:
      'TODO: Add a verified project description, contribution, technologies, and screenshot before publishing.',
    category: 'production',
    tags: [],
    featured: false,
    sortOrder: 9,
    published: false,
  },
  // TODO: Confirm the description, contribution, stack, and screenshot before publishing.
  {
    slug: 'invoice-management',
    title: 'Invoice Management Platform',
    summary:
      'TODO: Add a verified description, contribution, technologies, and screenshot before publishing.',
    category: 'production',
    tags: [],
    featured: false,
    sortOrder: 10,
    published: false,
  },
  {
    slug: 'nft-marketplace',
    title: 'NFT Marketplace DApp',
    summary:
      'A personal project with Solidity contracts and a Next.js interface for listings, purchases, and connecting a wallet.',
    category: 'web3',
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'EVM', 'Web3'],
    featured: false,
    sortOrder: 11,
    published: true,
  },
  {
    slug: 'crowdfunding',
    title: 'Crowdfunding DApp',
    summary:
      'A personal project for creating campaigns, tracking contributions, and withdrawing funds, with Solidity contracts and a Next.js front end.',
    category: 'web3',
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'TypeScript'],
    featured: false,
    sortOrder: 12,
    published: true,
  },
  {
    slug: 'dao-voting',
    title: 'DAO Voting DApp',
    summary:
      'A personal project for creating proposals and voting on them. The contracts are Solidity, and the interface is Next.js.',
    category: 'web3',
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Web3'],
    featured: false,
    sortOrder: 13,
    published: true,
  },
  {
    slug: 'erc-20-token-forge',
    title: 'ERC-20 Token Forge',
    summary:
      'A personal project for creating an ERC-20 token with OpenZeppelin, connecting a wallet, and deploying it to a testnet.',
    category: 'web3',
    status: 'Personal project',
    tags: ['Solidity', 'Foundry', 'OpenZeppelin', 'Next.js'],
    featured: false,
    sortOrder: 14,
    published: true,
  },
  // TODO: Confirm the stack, repository, and whether a frontend or testnet deployment exists.
  {
    slug: 'nft-minting',
    title: 'NFT Minting DApp',
    summary: 'A personal project for minting NFTs from a Solidity contract.',
    category: 'web3',
    status: 'Personal project',
    tags: ['Solidity', 'ERC-721'],
    featured: false,
    sortOrder: 15,
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

export function getProjectCover(project: Project): ProjectImage | null {
  if (project.coverImage) {
    return {
      src: project.coverImage,
      alt: `${project.title} screenshot`,
    }
  }

  return project.images?.[0] ?? null
}

export function getProjectGallery(project: Project): ProjectImage[] {
  const cover = getProjectCover(project)
  return (project.images ?? []).filter((image) => image.src !== cover?.src)
}
