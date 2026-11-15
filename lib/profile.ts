/**
 * Site copy and career details.
 * Dates are omitted until they are confirmed. Do not invent them here.
 * Locations are kept only where they were already recorded for that role.
 */

export const email = 'abdulmuhd857@gmail.com'
export const phoneDisplay = '+234 803 968 8857'
export const phoneHref = 'tel:+2348039688857'
export const location = 'Kano, Nigeria'
export const availability =
  'Open to remote opportunities, engineering roles, and contract work.'
export const githubUrl = 'https://github.com/Abdul100-han'
export const linkedInUrl =
  'https://www.linkedin.com/in/abdulsalam-muhammad-abubakar-90375a1ba'

export const navItems = [
  { label: 'Highlights', href: '/#highlights' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Web3', href: '/#web3' },
  { label: 'About', href: '/#about' },
  { label: 'Training', href: '/#education' },
] as const

export const heroTechnologies = [
  'React Native',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Solidity',
] as const

export const highlights = [
  { value: '5+ years', label: 'Software development experience' },
  { value: '3+ years', label: 'React Native and Expo development' },
  { value: 'Full-stack', label: 'Web, mobile, and backend engineering' },
  { value: 'Web3', label: 'Solidity and smart contract development' },
] as const

export const aboutParagraphs = [
  "I'm a Software Engineer with 5 years of experience building web and mobile applications, backend systems, and software products for businesses.",
  "Over the years, I've worked on different kinds of projects, from mobile applications and business management platforms to SaaS products, AI-powered systems, and civic technology solutions. My work spans frontend development, backend engineering, database design, API integrations, authentication, payment systems, and deployment.",
  "I enjoy working across the stack and taking ownership of features from the initial requirements through development and release. I've also worked closely with product owners and business stakeholders to understand their needs and turn them into practical software solutions.",
  "Alongside my full-stack and mobile development work, I'm expanding my expertise in Blockchain and Web3, with a focus on Solidity, smart contract development, Foundry, and decentralized applications.",
] as const

export const skillGroups = [
  {
    title: 'Mobile engineering',
    skills: [
      'React Native',
      'Expo',
      'TypeScript',
      'JavaScript',
      'NativeWind',
      'EAS Build',
      'EAS Submit',
      'Android',
      'iOS',
    ],
  },
  {
    title: 'Frontend engineering',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Shadcn/UI',
      'Material UI',
      'Chakra UI',
      'Redux Toolkit',
    ],
  },
  {
    title: 'Backend engineering',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Python',
      'REST APIs',
      'WebSockets',
      'API integrations',
      'Authentication',
      'Authorization',
      'RBAC',
      'Event-driven architecture',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Firebase', 'Appwrite'],
  },
  {
    title: 'AI and LLM integration',
    skills: [
      'OpenAI API',
      'Google Gemini',
      'Hugging Face',
      'RAG',
      'Embeddings',
      'Semantic search',
      'Conversational AI',
    ],
  },
  {
    title: 'Payments and business systems',
    skills: [
      'Paystack',
      'Flutterwave',
      'Stripe',
      'Monnify',
      'Payment integrations',
      'Webhooks',
      'Business workflows',
    ],
  },
  {
    title: 'Blockchain and Web3',
    skills: [
      'Solidity',
      'Foundry',
      'Forge',
      'Anvil',
      'Ethereum',
      'EVM',
      'OpenZeppelin',
      'Chainlink',
      'ERC-20',
      'ERC-721',
      'Smart contract testing',
      'Wallet integration',
      'Web3/dApp development',
    ],
  },
  {
    title: 'Cloud and development tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'Netlify',
      'Postman',
      'cPanel',
      'EAS',
      'Google Play Console',
      'App Store Connect',
    ],
  },
] as const

export type Role = {
  role: string
  organization: string
  /** Kept only where a location was already on record. Not a date. */
  meta?: string
  points?: readonly string[]
  tags?: readonly string[]
}

// Order follows the list supplied for this site. It is not sorted by year.
// TODO: Add confirmed start and end dates before presenting this as a timeline.
export const experience: readonly Role[] = [
  {
    role: 'Software Engineer',
    organization: 'Epipy Limited',
    meta: 'Abuja, Nigeria',
    points: [
      'Built features for managing farm structures and operations on the Farm Performance Intelligence Platform, a multi-tenant SaaS product.',
      'Implemented role-based access control, task workflows with timelines and dependencies, and proof-of-work submissions.',
      'Added SOP management, document versioning, audit logs, and operational analytics.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'RBAC'],
  },
  {
    role: 'Software Engineer',
    organization: 'STEDi-AI Framework',
    meta: 'Doha, Qatar · Contract',
    points: [
      'Built and maintained the Python and FastAPI backend for a framework that evaluates security technical debt.',
      'Wrote evaluation workflows for OpenAI, Gemini, and Hugging Face, including the security technical debt calculations.',
      'Implemented API authentication and security with JWT and OAuth.',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'OpenAI', 'Gemini', 'Hugging Face'],
  },
  {
    role: 'Mobile App Developer / Lead Mobile Engineer',
    organization: 'Iltizaam',
    meta: 'Lagos, Nigeria · Contract',
    points: [
      'Led the ILTIZAAM AI mobile app in React Native and Expo, including goals, daily planning, mood tracking, focus mode, reminders, financial goals, and dashboards.',
      'Integrated the app with the Node.js and Express API, including authentication and notifications.',
      'Published the Android app on Google Play.',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express'],
  },
  {
    role: 'Software Engineer',
    organization: 'Vennix OS',
    meta: 'Kano, Nigeria · Contract',
    points: [
      'Built frontend and backend features for an operations platform covering CRM, sales, inventory, procurement, finance, HR, payroll, projects, and reporting.',
      'Implemented payments, document generation, customer portals, notifications, and access permissions.',
      'Contributed to AI features in the product and to application workflows.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
  },
  {
    role: 'Software Engineer',
    organization: 'Alkhair Press',
    points: [
      'Developed frontend features and backend integrations.',
      'Built parts of the customer support system, including retrieval-augmented generation, semantic search, and conversation management.',
      'Improved security in the application.',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'OpenAI'],
  },
  // Stack is not listed here. The project record does not confirm it yet.
  {
    role: 'Software Engineer',
    organization: 'Dan Ziyal Academy & Consultancy',
    points: [
      'Built administrator, staff, and client dashboards for the academy and consultancy platform.',
      'Implemented authentication, role-based access, and document management, including sharing permissions, public links, and version history.',
      'Set up project and task tracking, invoices, quotations, Paystack payments, and PDF generation.',
    ],
  },
  {
    role: 'Software Engineer',
    organization: 'Shareef NiceHome Limited',
    points: [
      'Built product and inventory management for a sales platform, including stock movements and point-of-sale workflows.',
      'Added customer records and invoicing.',
      'Implemented reporting, authentication, and role-based access.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
  },
  // No project write-up in the repository, so this entry is title and organization only.
  {
    role: 'Web Developer',
    organization: 'Semveta Technologies',
  },
  // No project write-up in the repository, so this entry is title and organization only.
  {
    role: 'Software Engineer',
    organization: 'Rikruta',
  },
  // No project write-up in the repository, so this entry is title and organization only.
  {
    role: 'Web & Mobile Developer / Frontend Engineer',
    organization: 'Evault',
  },
  // No project write-up in the repository, so this entry is title and organization only.
  {
    role: 'Web Developer',
    organization: 'Petabyte Esport',
  },
  // No project write-up in the repository, so this entry is title and organization only.
  {
    role: 'Frontend Engineer',
    organization: 'Techivate Technologies',
  },
  {
    role: 'Community & Training Lead',
    organization: 'Enovate Lab Limited',
    points: [
      'Supported technology communities, including training and developer participation.',
      'Organized technical events, workshops, and learning activities.',
      'Worked with community members, speakers, and partners.',
    ],
  },
]

// TODO: Confirm that the Alchemy University program is still in progress.
export const training = [
  {
    provider: 'Cyfrin Updraft',
    program:
      'Blockchain Developer, Smart Contract & Solidity Career Path (Foundry Edition).',
    topics:
      'Solidity, EVM, Foundry, Chainlink, DeFi, gas optimization, smart contract testing, and security fundamentals.',
  },
  {
    provider: 'Alchemy University',
    program: 'Blockchain / Ethereum Developer Program.',
    status: 'Currently enrolled',
    topics: 'Ethereum, Web3 infrastructure, and decentralized application architecture.',
  },
] as const
