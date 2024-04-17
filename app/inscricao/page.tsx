'use client'

export default function InscricaoPage() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="hidden">Inscrições</h1>
      <section className="flex flex-col mt-4">
        <h2 className="font-bold text-4xl gap-2 text-purple-700">
          INSCRIÇÃO PARTICIPANTE
        </h2>
        <span className="flex justify-center font-semibold">
          Venha viver as melhores férias da sua vida!
        </span>

        <button className="font-bold p-2 bg-orange-400 text-white rounded-xl shadow-sm hover:bg-purple-700 transition-all hover:shadow-xl">
          CLIQUE AQUI!
        </button>
      </section>
    </main>
  )
}
