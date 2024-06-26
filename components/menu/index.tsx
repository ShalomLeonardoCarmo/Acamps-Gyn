'use client'

import Link from 'next/link'

export default function HeaderMenu() {
  return (
    <nav className="items-center justify-evenly flex-1 text-yellow-200 flex divide-x sm:divide-x-0">
      <Link
        href="/#local"
        className="lg:hover:scale-125 justify-center items-center flex-[1] flex md:hover:scale-110 lg:text-xl text-md font-bold h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Local
      </Link>
      <Link
        href="/inscricao"
        className="lg:hover:scale-125 md:hover:scale-110 justify-center items-center flex-[1] lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Inscrição
      </Link>
      <Link
        href="/#checklist"
        className="lg:hover:scale-125 justify-center items-center flex-[1] flex md:hover:scale-110 lg:text-xl text-md font-bold h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Check-list
      </Link>
      <Link
        href="/contato"
        className="lg:hover:scale-125 justify-center items-center flex-[1] flex md:hover:scale-110 lg:text-xl text-md font-bold h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Entre em contato
      </Link>
      {/* <button
        onClick={() => {
          alert('Liberado em breve. Por enquanto, que tal fazer sua inscrição?')
        }}
        className="lg:hover:scale-125 md:hover:scale-110 justify-center items-center flex-[1] lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Apadrinhamento
      </button> */}
    </nav>
  )
}
