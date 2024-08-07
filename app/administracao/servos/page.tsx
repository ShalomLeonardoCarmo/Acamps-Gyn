'use client'
import { ServoFormData } from '@/components/forms/servos'
import { formatDate } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdInfo } from 'react-icons/md'

type Servo = ServoFormData & {
  id: number
}

export const revalidate = 0

export default function ParticipantesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [servants, setServants] = useState<Servo[]>([])
  useEffect(() => {
    setIsLoading(true)
    fetch('/api/servants/', { cache: 'no-store' })
      .then((res) => {
        res.json().then((data) => setServants(data))
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="flex md:justify-center overflow-auto p-2">
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
          {servants.map((row) => (
            <tr key={row.id}>
              <td align="center" className="py-2">
                <Link href={`/administracao/servos/${row.id}`}>
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
              <td colSpan={5} className="p-2">
                Carregando...
              </td>
            )}
            {!isLoading && servants.length && (
              <td colSpan={5} align="center" className="p-2">
                Total: {servants.length} servos
              </td>
            )}
          </tr>
        </tfoot>
      </table>
    </main>
  )
}
