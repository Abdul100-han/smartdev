import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

const title = 'Abdulsalam M. Abubakar | Software Engineer'
const description =
  'I build web applications with Next.js, mobile apps with React Native and Expo, APIs with Node.js, and smart contracts with Solidity.'
const ogImage = {
  url: '/me-2.jpeg',
  width: 741,
  height: 704,
  alt: 'Portrait of Abdulsalam M. Abubakar',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: 'Abdulsalam M. Abubakar' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en',
    images: [ogImage],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: [ogImage.url],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080b0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-[#080b0d] font-sans text-[#f3f6f4] antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
