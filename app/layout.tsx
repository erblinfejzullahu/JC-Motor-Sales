import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  title: 'J C Motor Sales | Quality Used Cars in Los Angeles',
  description: 'Family-owned used car dealership in Los Angeles with 30+ years of experience. We help everyone get approved - good credit or bad credit welcome. Visit us at 3745 S Western Ave.',
  keywords: 'used cars Los Angeles, car dealership LA, bad credit car loans, buy here pay here, Latino owned business, affordable cars',
  openGraph: {
    title: 'J C Motor Sales | Quality Used Cars in Los Angeles',
    description: 'Family-owned used car dealership with 30+ years of experience. We help everyone get approved.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
