import Link from "next/link";

export default function HeaderMenu() {
  return (
    <nav className="items-center justify-evenly flex-1 text-purple-700 md:flex hidden">
      <Link href="#checklist" className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-orange-400 transition-all">
        Check-list
      </Link>
      <Link href="#checklist" className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-orange-400 transition-all">
        Local
      </Link>
      <Link href="#checklist" className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-orange-400 transition-all">
        Apadrinhamento
      </Link>
      <Link href="#checklist" className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-orange-400 transition-all">
        Entre em contato
      </Link>
      <Link href="#checklist" className="lg:hover:scale-125 md:hover:scale-110 lg:text-xl text-md font-bold flex h-fit hover:text-orange-400 transition-all">
        Apadrinhamento
      </Link>
    </nav>
  )
}
