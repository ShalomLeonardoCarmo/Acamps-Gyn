'use client'

import { ParticipanteForm } from '@/components/forms/participantes'
import { ServoForm } from '@/components/forms/servos'
import { useRouter } from 'next/navigation'

export default function InscricaoPage({
  searchParams,
}: {
  searchParams?: { form?: string }
}) {
  const { push } = useRouter()
  const openParticipante = searchParams?.form === 'participant'
  const openServo = searchParams?.form === 'servant'

  return (
    <main className="flex flex-col items-center gap-4 p-2">
      <h1 className="hidden">Inscrições</h1>
      <section className="flex flex-col mt-4 text-center w-full max-w-screen-sm">
        <h2 className="font-bold text-4xl gap-2 text-red-600 text-center w-full">
          INSCRIÇÃO PARTICIPANTES!
        </h2>
        <span className="flex justify-center font-semibold w-full">
          Venha viver as melhores férias da sua vida!
        </span>

        <button
          onClick={() => push('/inscricao?form=participant')}
          className="font-bold p-2 w-full bg-orange-400 text-white rounded-xl shadow-sm hover:bg-red-600 transition-all hover:shadow-xl"
        >
          CLIQUE AQUI!
        </button>
      </section>

      <section className="flex flex-col mt-4 text-center max-w-screen-sm">
        <h2 className="font-bold text-4xl gap-2 text-red-600 text-center">
          INSCRIÇÃO SERVOS!
        </h2>
        <span className="flex justify-center font-semibold">
          É no serviço que transbordamos o amor de Deus por nós. Vem ajudar os
          irmãos a terem sua experiência com Deus também!
        </span>

        <button
          onClick={() => push('/inscricao?form=servant')}
          className="font-bold p-2 bg-orange-400 text-white rounded-xl shadow-sm hover:bg-red-600 transition-all hover:shadow-xl"
        >
          CLIQUE AQUI!
        </button>
      </section>

      <ParticipanteForm
        onClose={() => push('/inscricao')}
        show={openParticipante}
      />

      <ServoForm onClose={() => push('/inscricao')} show={openServo} />

      <div className="flex flex-col gap-3 mt-2">
        <span>
          <strong>REEMBOLSO:</strong> A solicitação de reembolso deverá ser
          feita em até 15 dias que antecedem o evento, ou em caso de doença do
          participante/falecimento de algum parente de primeiro grau. Para tal,
          deve ser enviado um e-mail para Juventudegoiania@comshalom.org, com o
          título REEMBOLSO ACAMP&apos;S, por meio do nome e email cadastrados no
          momento da compra, acompanhado em anexo com atestado médico ou uma
          certidão de óbito. Em até 10 dias úteis será encaminhado o pedido de
          reembolso de ingressos no cartão de crédito ou em conta corrente com
          mesma titularidade. A disponibilização do valor ocorrerá de acordo com
          as regras da administradora do cartão ou banco do cliente.
        </span>
        <span>
          <strong>CANCELAMENTOS: </strong>
          De acordo com o Código de Defesa do Consumidor (Artigo 49), em caso de
          desistência, que deverá ocorrer em, no máximo, 7 dias corridos após a
          compra. O cliente deverá entrar em contato conosco através do e-mail
          juventudegoiania@comshalom.org, com o título CANCELAMENTO DA INSCRIÇÃO
          ACAMP’S, acompanhado pelo o nome e email cadastrados no momento da
          compra, de segunda a sexta das 14:00 às 20:00 solicitando o
          cancelamento do ingresso. Em até 10 dias úteis será encaminhado o
          pedido de reembolso de ingressos no cartão de crédito ou em conta
          corrente com mesma titularidade. A disponibilização do valor ocorrerá
          de acordo com as regras da administradora do cartão ou banco do
          cliente.
        </span>
      </div>
    </main>
  )
}
