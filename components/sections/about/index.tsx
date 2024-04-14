import { InstagramSection } from '../instagram'
import { GiForestCamp, GiPartyPopper, GiMusicalNotes } from 'react-icons/gi'
import { MdPool } from 'react-icons/md'

export function AboutSection() {
  return (
    <section className="p-2 bg-zinc-100 w-fit flex flex-col max-w-4xl gap-4 items-center justify-center rounded-xl shadow-lg">
      <h2 className="text-5xl font-bold text-center text-purple-700">
        Acamp&apos;s Gyn
      </h2>
      <div className="grid sm:grid-cols-2 sm:divide-x-2">
        <div className="p-2 flex flex-col font-semibold text-orange-400">
          <InstagramSection />
        </div>
        <div className="p-2 flex flex-col font-semibold text-orange-400">
          <span className="font-bold">É impossível descrever!</span>
          <span>Com certeza, serão as melhores férias da sua vida!</span>
          <br />
          <span>
            Bem-vindos a uma aventura única e inesquecível, onde a diversão e a
            amizade se unem como nunca antes. Prepare-se para o evento mais
            épico do ano.
          </span>
          <br />
          <span>
            Esse vídeo ao lado é só uma prévia do que acontece no Acamp&apos;s
            Shalom e esse ano vai ter muito mais!
          </span>
          <br />
          <span className="font-bold">
            <span className="flex gap-2 items-center">
              <GiMusicalNotes className="text-purple-700" size={22} /> Shows ao
              vivo
            </span>
            <span className="flex gap-2 items-center">
              <MdPool className="text-purple-700" size={22} /> Piscina para
              lazer
            </span>
            <span className="flex gap-2 items-center">
              <GiForestCamp className="text-purple-700" size={22} /> Contato com
              a natureza
            </span>
            <span className="flex gap-2 items-center">
              <GiPartyPopper className="text-purple-700" size={22} /> Bastante
              animação
            </span>
            <span className="flex gap-2 items-center">E MUITO MAIS!</span>
          </span>
          <br />
          <span>- Dos dias 10 à 14 de julho</span>
          <span>- Na chácara Dois Corações, Hidrolândia/GO</span>
          <span>
            {' '}
            - Acamp&apos;s 2024, trazido a você pela Comunidade Católica Shalom!
          </span>
          <br />
          <span className="font-bold">
            EM BREVE AS ATRAÇÕES SERÃO DIVULGADAS
          </span>
        </div>
      </div>
    </section>
  )
}
