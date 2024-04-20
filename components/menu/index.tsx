import Link from 'next/link'

export default function HeaderMenu() {
  return (
    <nav className="items-center justify-evenly flex-1 text-yellow-200 md:flex hidden">
      <Link
        href="#checklist"
        className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Check-list
      </Link>
      <Link
        href="#local"
        className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Local
      </Link>
      <Link
        href="#apadrinhamento"
        className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Apadrinhamento
      </Link>
      <Link
        href="#contato"
        className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Entre em contato
      </Link>
      <Link
        href="/inscricao"
        className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-yellow-300 focus:text-yellow-300 transition-all"
      >
        Inscrição
      </Link>
    </nav>
  )
}
