'use client'

import { ParticipanteForm } from '@/components/forms/participantes'
import { ServoForm } from '@/components/forms/servos'
import { useState } from 'react'

export default function InscricaoPage() {
  const [openParticipante, setOpenParticipante] = useState(false)
  const [openServo, setOpenServo] = useState(false)

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
          onClick={() => setOpenParticipante(true)}
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
          onClick={() => setOpenServo(true)}
          className="font-bold p-2 bg-orange-400 text-white rounded-xl shadow-sm hover:bg-red-600 transition-all hover:shadow-xl"
        >
          CLIQUE AQUI!
        </button>
      </section>

      <ParticipanteForm
        onClose={() => setOpenParticipante(false)}
        show={openParticipante}
      />

      <ServoForm onClose={() => setOpenServo(false)} show={openServo} />
    </main>
  )
}
