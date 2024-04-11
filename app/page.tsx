import Link from 'next/link'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import pjj from '@/public/PJJ.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen">
      <div className="bg-gradient-to-br text-white gap-4 flex-col items-center justify-center from-sky-500 p-4 to-blue-950 flex flex-1 h-full">
        <span className="text-3xl md:text-6xl lg:text-8xl text-center font-bold drop-shadow-2xl">
          AS MELHORES FÉRIAS DA SUA VIDA!
        </span>
        <span className="font-semibold">É IMPOSSÍVEL DESCREVER!</span>
        <div className="flex gap-4 items-center">
          <Link
            href="https://wa.me/556236095354?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Acamp%27s"
            target="_blank"
          >
            <FaWhatsapp className="transition-all text-4xl text-green-400 hover:scale-150" />
          </Link>
          <Link href="https://www.instagram.com/shalomgoiania/" target="_blank">
            <FaInstagram className="transition-all text-4xl text-[#E4405F] hover:scale-150" />
          </Link>
          <Link
            href="https://www.instagram.com/juventudegoianiash/"
            target="_blank"
          >
            <Image
              src={pjj}
              alt="Instagram PJJ"
              className="w-6 hover:scale-150 transition-all"
            />
          </Link>
        </div>
      </div>

      <section className="h-screen" id="checklist">
        <span>Check-List</span>
      </section>

      <section className="h-screen" id="local">
        <span>Local</span>
      </section>

      <section className="h-screen" id="apadrinhamento">
        <span>Apadrinhamento</span>
      </section>

      <section className="h-screen" id="contato">
        <span>Contato</span>
      </section>

      <section className="h-screen" id="inscricao">
        <span>Inscrição</span>
      </section>
    </main>
  )
}
