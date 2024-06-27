'use client'
import { ParticipanteFormData } from '@/components/forms/participantes'
import { formatDate } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdInfo } from 'react-icons/md'

type Participante = ParticipanteFormData & {
  id: number
}

export const revalidate = 0

export default function ParticipantesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [participants, setParticipants] = useState<Participante[]>([])
  useEffect(() => {
    setIsLoading(true)
    fetch('/api/participants/', { cache: 'no-store' })
      .then((res) => {
        res.json().then((data) => setParticipants(data))
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="flex md:justify-center p-2 w-full overflow-auto">
      <table className="bg-red-600 w-full divide-y max-w-screen-sm md:max-w-screen-lg rounded-xl shadow-lg">
        <thead className="text-center text-yellow-200 font-bold text-lg">
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Responsável</th>
            <th>Data de Nascimento</th>
            <th>Comprovante de pagamento</th>
          </tr>
        </thead>
        <tbody className="text-center text-white font-semibold divide-y">
          {participants.map((row) => (
            <tr key={row.id}>
              <td align="center" className="py-2">
                <Link href={`/administracao/participantes/${row.id}`}>
                  <MdInfo size={25} className="text-yellow-200" />
                </Link>
              </td>
              <td>{row.name}</td>
              <td>{`${row.responsible_contact.number} (${row.responsible_contact.name})`}</td>
              <td>{formatDate(row.birthdate)}</td>
              <td>
                <Link target="_blank" href={`${row.payment}`}>
                  Clique aqui
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-center text-white">
          <tr>
            {isLoading && (
              <td colSpan={4} className="p-2">
                Carregando...
              </td>
            )}
            {!isLoading && participants.length && (
              <td colSpan={4} align="center" className="p-2">
                Total: {participants.length} participantes
              </td>
            )}
          </tr>
        </tfoot>
      </table>
    </main>
  )
}
