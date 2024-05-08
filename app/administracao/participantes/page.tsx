import { MdInfo } from 'react-icons/md'

export default function ParticipantesPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-2">
      <table className="bg-red-600 w-full max-w-screen-sm md:max-w-screen-lg">
        <thead className="text-center text-yellow-200 font-bold text-lg">
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Contato</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>
              <button>
                <MdInfo />
              </button>
            </td>
            <td>Antonio Leonardo</td>
            <td>(62) 99999-9999</td>
            <td>31/01/2004</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
