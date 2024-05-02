import Link from 'next/link'

import { IoMdMail } from 'react-icons/io'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

import Tooltip from '@/components/tootlip'
import { AboutSection, CheckListSection } from '@/components/sections'
import { Metadata } from 'next'
import LocalSection from '@/components/sections/local-section'

export const metadata: Metadata = {
  title: "Acamp's Gyn • É Impossível Descrever",
  description:
    'As melhores férias da sua vida! É impossível descrever! Vem viver essa experiência com a gente',
  openGraph: {
    alternateLocale: 'Goiânia/GO - Jardim América',
    countryName: 'Brasil',
    determiner: 'auto',
    locale: 'Goiânia/GO - Jardim América',
    title: "Acamp's Gyn • É Impossível Descrever",
    url: 'https://acampsgyn.vercel.app',
    emails: 'juventudegoiania@comshalom.org',
    phoneNumbers: '(62) 3609-5354',
    siteName: "Acamp's Gyn",
    type: 'website',
    description:
      'As melhores férias da sua vida! É impossível descrever! Vem viver essa experiência com a gente.',
  },
}

export default function Home() {
  return (
    <main className="gap-4">
      <div
        id="gradient"
        className="bg-gradient-to-tr animate-bgRotate bg-400 text-white h-[90vh] gap-4 flex-col items-center justify-center from-sky-500 p-4 to-blue-950 flex flex-1"
      >
        <h1 className="text-3xl md:text-6xl lg:text-8xl text-center font-bold drop-shadow-2xl">
          AS MELHORES FÉRIAS
          <br />
          DA SUA VIDA!
        </h1>
        <h2 className="font-semibold">É IMPOSSÍVEL DESCREVER!</h2>
        <div className="flex gap-4 items-center">
          <Link
            href="https://wa.me/556236095354?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Acamp%27s"
            target="_blank"
          >
            <Tooltip text="WhatsApp">
              <FaWhatsapp className="transition-all text-4xl text-green-400 hover:scale-150" />
            </Tooltip>
          </Link>
          <Link
            href="https://www.instagram.com/juventudegoianiash/"
            target="_blank"
          >
            <Tooltip text="Instagram">
              <FaInstagram className="transition-all text-4xl text-[#E4405F] hover:scale-150" />
            </Tooltip>
          </Link>
          <Link href="mailto:juventudegoiania@comshalom.org" target="_blank">
            <Tooltip text="E-mail: juventudegoiania@comshalom.org">
              <IoMdMail className="transition-all text-4xl text-white hover:scale-150" />
            </Tooltip>
          </Link>
        </div>
      </div>

      <div className="flex w-full justify-center p-2">
        <AboutSection />
      </div>

      <div className="flex w-full justify-center p-2">
        <LocalSection />
      </div>

      <div className="flex w-full justify-center p-2">
        <CheckListSection />
      </div>
    </main>
  )
}
