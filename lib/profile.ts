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
  { label: 'Highlights', href: '#highlights' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Web3', href: '#web3' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
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
      'Built the Farm Performance Intelligence Platform, a multi-tenant SaaS product for farm operations and performance analytics.',
      'Worked on farm structures, role-based access, task workflows, proof-of-work submissions, SOP repositories, document versioning, audit logging, and operational dashboards.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'RBAC'],
  },
  {
    role: 'Software Engineer',
    organization: 'STEDi-AI Framework',
    meta: 'Doha, Qatar · Contract',
    points: [
      'Built and maintained a FastAPI backend for security technical debt analysis across OpenAI, Gemini, and Hugging Face.',
      'Worked on multi-provider evaluation logic, security calculations, and production JWT/OAuth authentication.',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'OpenAI', 'Gemini'],
  },
  {
    role: 'Mobile App Developer / Lead Mobile Engineer',
    organization: 'Iltizaam',
    meta: 'Lagos, Nigeria · Contract',
    points: [
      'Led the React Native and Expo application, including goals, daily planning, mood tracking, focus mode, reminders, financial goals, dashboards, authentication, and notifications.',
      'Integrated the mobile app with the Node.js and Express API.',
      'Published the Android application on Google Play.',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
  },
  {
    role: 'Software Engineer',
    organization: 'Vennix OS',
    meta: 'Kano, Nigeria · Contract',
    points: [
      'Worked across the frontend, backend, database, authentication, and business logic of an operations platform covering CRM, finance, HR, payroll, projects, and reporting.',
      'Implemented payment processing, document generation, customer portals, notifications, granular permissions, and AI-powered business features.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
  },
  {
    role: 'Software Engineer',
    organization: 'Alkhair Press',
    points: [
      'Worked on the frontend, backend integrations, and AI customer support, including RAG-based retrieval, semantic search, and conversation management.',
      'Contributed to security improvements on the platform.',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'OpenAI'],
  },
  // TODO: Add a verified description of the work at Dan Ziyal Academy & Consultancy.
  {
    role: 'Software Engineer',
    organization: 'Dan Ziyal Academy & Consultancy',
  },
  {
    role: 'Software Engineer / Technical Lead',
    organization: 'FixKano',
    meta: 'Kano, Nigeria · Contract',
    points: [
      'Led technical delivery of a civic reporting platform across the mobile application, web interface, backend integration, testing, and deployment.',
      'The product covers photo-based reports, geolocation, user accounts, issue tracking, status updates, and administrative workflows.',
    ],
    tags: ['React Native', 'React', 'Node.js', 'Geolocation'],
  },
  // TODO: Add a verified description of the work at Shareef NiceHome Limited.
  {
    role: 'Software Engineer',
    organization: 'Shareef NiceHome Limited',
  },
  // TODO: Add a verified description of the work at Semveta Technologies.
  {
    role: 'Web Developer',
    organization: 'Semveta Technologies',
  },
  // TODO: Add a verified description of the work at Rikruta.
  {
    role: 'Software Engineer',
    organization: 'Rikruta',
  },
  // TODO: Add a verified description of the work at Evault.
  {
    role: 'Web & Mobile Developer / Frontend Engineer',
    organization: 'Evault',
  },
  // TODO: Add a verified description of the work at Petabyte Esport.
  {
    role: 'Web Developer',
    organization: 'Petabyte Esport',
  },
  // TODO: Add a verified description of the work at Techivate Technologies.
  {
    role: 'Frontend Engineer',
    organization: 'Techivate Technologies',
  },
  // TODO: Add a verified description of the work at Enovate Lab Limited.
  {
    role: 'Community & Training Lead',
    organization: 'Enovate Lab Limited',
  },
  // TODO: Add a verified description of the work at Arusco ICT Solutions.
  {
    role: 'Web Developer',
    organization: 'Arusco ICT Solutions',
  },
]

export const formalEducation = {
  qualification: 'Higher National Diploma (HND)',
  field: 'Mechanical Engineering (Plant & Power)',
  school: 'Kano State Polytechnic, Kano, Nigeria',
}

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
