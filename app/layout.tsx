import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Quicksand } from 'next/font/google'
import './globals.css'
import AcampsLogo from '@/public/acamps.webp'
import Image from 'next/image'
import HeaderMenu from '@/components/menu'
import Link from 'next/link'
import impossivelDescrever from '@/public/AcampsArt.png'
import GoToTop from '@/components/button'
import { SpeedInsights } from '@vercel/speed-insights/next'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Acamp's Gyn",
  description: 'As melhores férias da sua vida! É impossível descrever!',
  icons: '/acamps.webp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="bg-acamps-flags animate-flags scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="mDDuLpenAdN0s3prodLsW-Ng7qHcKLvX79Zbb66zglA"
        />
      </head>
      <body className={`${quicksand.className}`}>
        <header className="w-full bg-slate-950">
          <div className="flex flex-col p-2 md-p-1 gap-2 divide-y">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src={AcampsLogo}
                  alt="Acamps"
                  className="min-w-14 min-h-14 md:w-20 md:h-20 lg:w-28 lg:h-28"
                />
              </Link>
              <Image
                alt="Impossível Descrever"
                src={impossivelDescrever}
                className="max-h-14 md:max-h-20 lg:max-h-28 w-auto"
              />
            </div>
            <HeaderMenu />
          </div>
        </header>
        {children}
        <GoToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
