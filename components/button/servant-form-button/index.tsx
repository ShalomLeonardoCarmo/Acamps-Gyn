'use client'
import { useRouter } from 'next/navigation'

export function ServantFormButton() {
  const { push } = useRouter()

  return (
    <button
      onClick={() => push('/inscricao?form=servant')}
      className="font-bold p-2 bg-orange-400 text-white rounded-xl shadow-sm hover:bg-red-600 transition-all hover:shadow-xl"
    >
      CLIQUE AQUI!
    </button>
  )
}
