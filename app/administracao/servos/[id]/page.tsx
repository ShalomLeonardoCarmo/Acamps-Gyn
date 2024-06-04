'use client'
import { ServoFormData } from '@/components/forms/servos'
import { formatDate } from '@/utils'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Servo = ServoFormData & {
  id: number
}

export default function DetalhesParticipantePage({
  params,
}: {
  params: { id: number }
}) {
  const habilities = [
    'Tocar/Cantar',
    'Cozinhar',
    'Dançar/Atuar/Maquiar',
    'Relacionamento com Pessoas',
    'Vendas',
    'Tem CNH',
    'Balde/Vassoura',
    'Planilhas',
    'Mídias Sociais & Programas de edição de foto/vídeo',
    'Enfermeir(a)/Médico(a)/Socorrista',
    'Decorar e Acolher',
    'Organização e Segurança',
    'Liturgia',
    'Escutar os Jovens',
    'Estrutura',
    'Outras',
  ]
  const [isLoading, setIsLoading] = useState(true)
  const [servant, setServant] = useState<Servo>()
  useEffect(() => {
    axios
      .get(`/api/servants/${params.id}`)
      .then((res) => {
        setServant(res.data)
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

        {servant && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Link
                target="_blank"
                href={servant.payment}
                className="underline font-semibold"
              >
                Comprovante de pagamento
              </Link>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Nome:</span>
              <span>{servant.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Habilidades:</span>
              {Object.values(servant.habilities).map((obj, index) =>
                typeof obj === 'boolean' && obj ? (
                  <>{`${habilities[index]}, `}</>
                ) : typeof obj === 'string' ? (
                  <>{`${obj}, `}</>
                ) : (
                  <></>
                ),
              )}
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Endereço:</span>
              <span>{servant.address}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Data de nascimento:</span>
              <span>{formatDate(servant.birthdate)}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Cidade:</span>
              <span>
                {servant.wich_city === 1
                  ? 'Anápolis'
                  : servant.wich_city === 2
                    ? 'Campestre'
                    : servant.wich_city === 3
                      ? 'Goianésia'
                      : servant.wich_city === 4
                        ? 'Goiania'
                        : servant.city_name}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">E-mail:</span>
              <span>{servant.email}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Restrição alimentar:</span>
              <span>
                {servant.food_restriction ? servant.food_restriction : 'Não'}
              </span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Possui alergia:</span>
              <span>{servant.have_allergies ? 'Sim' : 'Não'}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Medicação frequente:</span>
              <span>{servant.frequentlly_use_medication ? 'Sim' : 'Não'}</span>
            </div>

            {servant.frequentlly_use_medication && (
              <div className="flex flex-col bg-zinc-700 w-fit p-2 rounded-lg">
                <span className="font-bold">Medicações:</span>
                <div className=" flex flex-col">
                  {servant.wich_medication.map((medication, index) => (
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
                <span>{servant.general_registration}</span>
              </div>
              <div className="flex flex-col px-2">
                <Link
                  className="underline"
                  target="_blank"
                  href={servant.general_registration_front}
                >
                  Foto RG (frente)
                </Link>
                <Link
                  className="underline"
                  target="_blank"
                  href={servant.general_registration_back}
                >
                  Foto RG (verso)
                </Link>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">
                Como ficou sabendo do Acamp&apos;s:
              </span>
              <span>{servant.how_find_acamps}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Convidado(a) por:</span>
              <span>{servant.my_friend_called_me}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">Telefone para contato:</span>
              <span>{servant.phone}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">Telefone do(a) responsável:</span>
              <div className="flex flex-col px-4">
                <span>Nome: {servant.responsible_contact.name}</span>
                <span>Número: {servant.responsible_contact.number}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
