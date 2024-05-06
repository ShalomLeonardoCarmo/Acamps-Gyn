import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { MdMail, MdPlace, MdWhatsapp } from 'react-icons/md'

export default function ContactPage() {
  return (
    <main className="bg-acamps-flags flex items-center justify-center p-2 flex-col">
      <section
        id="local"
        className="p-2 bg-zinc-100 flex flex-col w-full max-w-4xl gap-4 items-center justify-center rounded-xl shadow-lg"
      >
        <h2 className="text-5xl font-bold text-center text-red-600">
          Está com alguma dúvida?
        </h2>

        <div className="flex flex-col text-red-600 gap-4">
          <span className="font-bold text-lg">
            Não tem problema. Você pode entrar em contato com a gente através
            dos nossos canais de comunicação:
          </span>
          <div className="flex gap-1 items-center">
            <MdMail size={25} />
            <span className="font-bold">
              E-mail: juventudegoiania@comshalom.org
            </span>
          </div>

          <Link
            href={
              'https://wa.me/556236095354?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Acamp%27s'
            }
            target="_blank"
            className="flex gap-1 items-center w-fit"
          >
            <MdWhatsapp size={25} />
            <span className="font-bold">WhatsApp:</span>
            <span className="font-semibold underline">(62) 3609-5354</span>
          </Link>

          <div className="flex gap-1 items-center">
            <BsInstagram size={25} />
            <span className="font-bold">Instagram:</span>
            <span className="font-semibold flex gap-2">
              <Link
                href={'https://instagram.com/shalomgoiania'}
                target="_blank"
                className="underline flex gap-1 items-center"
              >
                @shalomgoiania
              </Link>
              <Link
                href={'https://www.instagram.com/juventudegoianiash/'}
                target="_blank"
                className="underline flex gap-1 items-center"
              >
                @juventudegoianiash
              </Link>
            </span>
          </div>

          <Link
            href={'https://maps.app.goo.gl/bZUYJYTZhPw8bg1t5'}
            target="_blank"
            className="flex gap-1 items-center w-fit"
          >
            <MdPlace size={25} />
            <span className="font-bold">Nosso endereço:</span>
            <span className="font-semibold underline">
              Av. C-205, 400 - Jardim América, Goiânia - GO, 74270-020
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}
