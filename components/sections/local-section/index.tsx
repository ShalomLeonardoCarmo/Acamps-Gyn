'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdPlace } from 'react-icons/md'

export default function LocalSection() {
  const [screenWidth, setScreenWidth] = useState<number>()
  const [map, setMap] = useState(1)

  useEffect(() => {
    setScreenWidth(window.screen.width)
  }, [])

  return (
    <section
      id="local"
      className="p-2 bg-zinc-100 flex flex-col w-full max-w-4xl gap-4 items-center justify-center rounded-xl shadow-lg"
    >
      <h2 className="text-5xl font-bold text-center text-red-600">
        Localização
      </h2>

      <div className="flex gap-1">
        <Link
          href="https://maps.app.goo.gl/J1CqJGzLoERW5taM8"
          target="_blank"
          className="text-orange-400 hover:text-red-600 hover:underline font-bold flex gap-2 items-center justify-center"
        >
          <MdPlace size={25} className="text-red-600" />
          Ponto de Partida: Shalom Goiânia
        </Link>
        {map === 1 && (
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => setMap(2)}
          >
            Ver no mapa
          </button>
        )}
      </div>

      <div className="flex gap-1">
        <Link
          href="https://maps.app.goo.gl/XKhuSVbMRuxS7Ge88"
          target="_blank"
          className="text-orange-400 hover:text-red-600 hover:underline font-bold flex gap-2 items-center justify-center"
        >
          <MdPlace size={25} className="text-red-600" />
          Local do Acampamento: Espaço Arvoredo - Hidrolândia/GO
        </Link>
        {map === 2 && (
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => setMap(1)}
          >
            Ver no mapa
          </button>
        )}
      </div>

      {map === 1 ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.5036034434384!2d-49.2986989!3d-16.900432900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efe115769c01f%3A0x3b9a05e5e623340e!2sEspa%C3%A7o%20Arvoredo!5e0!3m2!1spt-BR!2sbr!4v1716317573703!5m2!1spt-BR!2sbr"
          width={
            screenWidth && screenWidth < 600 ? `${screenWidth - 50}` : '600'
          }
          height="400"
          className="border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.160107049383!2d-49.30181389218753!3d-16.699885599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef43240c16cbb%3A0xf625613b9d5bb4d0!2sComunidade%20Cat%C3%B3lica%20Shalom%20(Goiania)!5e0!3m2!1spt-BR!2sbr!4v1713992056044!5m2!1spt-BR!2sbr"
          width={
            screenWidth && screenWidth < 600 ? `${screenWidth - 50}` : '600'
          }
          height="400"
          className="border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </section>
  )
}
