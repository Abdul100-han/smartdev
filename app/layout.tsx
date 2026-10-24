import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const title = 'Abdulsalam M. Abubakar | Software Engineer'
const description =
  'I build web applications with Next.js, mobile apps with React Native and Expo, APIs with Node.js, and smart contracts with Solidity.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary',
    title,
    description,
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
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body className="bg-[#080b0d] text-[#f3f6f4] antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
