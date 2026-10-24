/**
 * Static project content for the public portfolio.
 * `getPublicProjects` is the read path the page uses, so a later database
 * can replace that function without changing the cards.
 */

export type ProjectCategory = 'production' | 'personal'

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  /** Longer write-up for a future detail view. Omitted when the summary is the full account. */
  description?: string
  category: ProjectCategory
  tags: readonly string[]
  repoUrl?: string
  liveUrl?: string
  /** Local public path, for example `/projects/iltizaam.png`. */
  coverImage?: string
  /** Extra screenshots. The homepage does not render a gallery yet. */
  images?: readonly ProjectImage[]
  featured?: boolean
  sortOrder: number
}

export const categoryLabel: Record<ProjectCategory, string> = {
  production: 'Production',
  personal: 'Personal project',
}

const projects: readonly Project[] = [
  {
    slug: 'iltizaam-ai',
    title: 'Iltizaam AI',
    summary:
      'An accountability and productivity app I helped lead through release on Google Play and the App Store. It includes goal planning, daily planning, mood tracking, focus tools, and AI-powered motivation.',
    category: 'production',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'AI APIs'],
    featured: true,
    sortOrder: 1,
  },
  {
    slug: 'vennix-os',
    title: 'Vennix OS',
    summary:
      'A business operations platform covering CRM, finance, HR, payroll, projects, and reporting. My work included Paystack integration, document generation, and a customer portal.',
    category: 'production',
    tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'AI'],
    featured: true,
    sortOrder: 2,
  },
  {
    slug: 'kantin-kwari-market-id',
    title: 'Kantin Kwari Market ID',
    summary:
      'An identification platform with BVN registration, QR verification, bulk card printing, and dashboards.',
    category: 'production',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'QR'],
    featured: true,
    sortOrder: 3,
  },
  {
    slug: 'fixkano',
    title: 'FixKano',
    summary:
      'A civic reporting platform that lets people report local issues using photos and location information. I led delivery across the mobile app, web interface, and backend.',
    category: 'production',
    tags: ['React Native', 'React', 'Node.js', 'Geolocation'],
    featured: true,
    sortOrder: 4,
  },
  {
    slug: 'nft-marketplace',
    title: 'NFT Marketplace DApp',
    summary:
      'A personal project: Solidity contracts and a Next.js interface for listings, purchases, and connecting a wallet.',
    category: 'personal',
    tags: ['Solidity', 'Foundry', 'Next.js', 'EVM', 'Web3'],
    featured: false,
    sortOrder: 5,
  },
  {
    slug: 'crowdfunding',
    title: 'Crowdfunding DApp',
    summary:
      'A personal project for creating campaigns, tracking contributions, and withdrawing funds, with Solidity contracts and a Next.js front end.',
    category: 'personal',
    tags: ['Solidity', 'Foundry', 'Next.js', 'TypeScript'],
    featured: false,
    sortOrder: 6,
  },
  {
    slug: 'dao-voting',
    title: 'DAO Voting DApp',
    summary:
      'A personal project for creating proposals and voting on them. The contracts are Solidity, and the interface is Next.js.',
    category: 'personal',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Web3'],
    featured: false,
    sortOrder: 7,
  },
  {
    slug: 'erc-20-token-forge',
    title: 'ERC-20 Token Forge',
    summary:
      'A personal project for creating an ERC-20 token with OpenZeppelin, connecting a wallet, and deploying it to a testnet.',
    category: 'personal',
    tags: ['Solidity', 'Foundry', 'OpenZeppelin', 'Next.js'],
    featured: false,
    sortOrder: 8,
  },
]

export function getPublicProjects(): Project[] {
  return [...projects].sort((a, b) => a.sortOrder - b.sortOrder)
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
