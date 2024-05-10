'use client'
import { ParticipanteFormData } from '@/components/forms/participantes'
import { formatDate } from '@/utils'
import axios from 'axios'
import Link from 'next/link'
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Link
                target="_blank"
                href={participant.payment}
                className="underline font-semibold"
              >
                Comprovante de pagamento
              </Link>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Nome:</span>
              <span>{participant.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Endereço:</span>
              <span>{participant.address}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Data de nascimento:</span>
              <span>{formatDate(participant.birthdate)}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Cidade:</span>
              <span>
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
              <span>{participant.email}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Restrição alimentar:</span>
              <span>
                {participant.food_restriction
                  ? participant.food_restriction
                  : 'Não'}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Possui alergia:</span>
              <span>{participant.have_allergies ? 'Sim' : 'Não'}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Medicação frequente:</span>
              <span>
                {participant.frequentlly_use_medication ? 'Sim' : 'Não'}
              </span>
            </div>

            {participant.frequentlly_use_medication && (
              <div className="flex flex-col bg-zinc-700 w-fit p-2 rounded-lg">
                <span className="font-bold">Medicações:</span>
                <div className=" flex flex-col">
                  {participant.wich_medication.map((medication, index) => (
                    <div className="flex gap-2" key={index}>
                      <span>Nome: {medication.medication_name} | </span>
                      <span>Frequência: {medication.frequency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className="font-bold">RG:</span>
                <span>{participant.general_registration}</span>
              </div>
              <div className="flex flex-col px-2">
                <Link
                  className="underline"
                  target="_blank"
                  href={participant.general_registration_front}
                >
                  Foto RG (frente)
                </Link>
                <Link
                  className="underline"
                  target="_blank"
                  href={participant.general_registration_back}
                >
                  Foto RG (verso)
                </Link>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">
                Como ficou sabendo do Acamp&apos;s:
              </span>
              <span>{participant.how_find_acamps}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Convidado(a) por:</span>
              <span>{participant.my_friend_called_me}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Telefone para contato:</span>
              <span>{participant.phone}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">Telefone do(a) responsável:</span>
              <div className="flex flex-col px-4">
                <span>Nome: {participant.responsible_contact.name}</span>
                <span>Número: {participant.responsible_contact.number}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
