'use client'
import { ParticipanteFormData } from '@/components/forms/participantes'
import { formatDate } from '@/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Participante = ParticipanteFormData & {
  id: number
}

export default function DetalhesParticipantePage({
  params,
}: {
  params: { id: number }
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [participant, setParticipant] = useState<Participante>()
  useEffect(() => {
    axios
      .get(`/api/participants/${params.id}`)
      .then((res) => {
        setParticipant(res.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [params.id])

  return (
    <main className="p-2 flex flex-1 items-center justify-center">
      <div className="bg-red-600 rounded-xl w-full max-w-screen-sm md:max-w-screen-lg p-2 text-lg text-white">
        {isLoading && (
          <span className="text-yellow-200 font-bold text-xl">
            Carregando...
          </span>
        )}

        {participant && (
          <>
            <div className="flex gap-2">
              <span className="font-bold">Nome:</span>
              <span className="font-semibold">{participant.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Endereço:</span>
              <span className="font-semibold">{participant.address}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Data de nascimento:</span>
              <span className="font-semibold">
                {formatDate(participant.birthdate)}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Cidade:</span>
              <span className="font-semibold">
                {participant.wich_city === 1
                  ? 'Anápolis'
                  : participant.wich_city === 2
                    ? 'Campestre'
                    : participant.wich_city === 3
                      ? 'Goianésia'
                      : participant.wich_city === 4
                        ? 'Goiania'
                        : participant.city_name}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">E-mail:</span>
              <span className="font-semibold">{participant.email}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Restrição alimentar:</span>
              <span className="font-semibold">
                {participant.food_restriction
                  ? participant.food_restriction
                  : 'Não'}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Medicação frequente:</span>
              <span className="font-semibold">
                {participant.frequentlly_use_medication ? 'Sim' : 'Não'}
              </span>
            </div>

            {participant.frequentlly_use_medication && (
              <div className="flex gap-2">
                <span className="font-bold">Medicações:</span>
                <span className="font-semibold">
                  {participant.wich_medication.map((medication, index) => (
                    <div className="flex gap-2" key={index}>
                      <span>Nome: {medication.medication_name}</span>
                      <span>Nome: {medication.frequency}</span>
                    </div>
                  ))}
                </span>
              </div>
            )}

            <div className="flex gap-2">
              <span className="font-bold">RG:</span>
              <span className="font-semibold">
                {participant.general_registration}
              </span>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
