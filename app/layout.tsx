import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Quicksand } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Image from 'next/image'
import HeaderMenu from '@/components/menu'
import Link from 'next/link'
import impossivelDescrever from '@/public/Acamps.png'
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
    <html
      lang="pt-br"
      className="bg-acamps-flags bg-red-100 animate-flags scroll-smooth"
    >
      <head>
        <meta
          name="google-site-verification"
          content="mDDuLpenAdN0s3prodLsW-Ng7qHcKLvX79Zbb66zglA"
        />
      </head>
      <body className={`${quicksand.className}`}>
        <header className="w-full bg-red-600">
          <div className="flex flex-col p-2 md-p-1 gap-2 divide-y">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  alt="Impossível Descrever"
                  src={impossivelDescrever}
                  className="max-h-14 md:max-h-20 lg:max-h-28 w-auto"
                />
              </Link>
            </div>
            <HeaderMenu />
          </div>
        </header>
        {children}
        <GoToTop />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-NXR0ZNP4B6" />
    </html>
  )
}
