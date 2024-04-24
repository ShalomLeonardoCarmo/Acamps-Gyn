'use client'

import { useEffect, useState } from 'react'
import { RxArrowUp } from 'react-icons/rx'

export default function GoToTop() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY
      setScroll(scrolled)
    })
  }, [])

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`${scroll > 150 ? 'opacity-100' : 'opacity-0'} transition-all fixed bg-orange-400 p-2 bottom-2 right-2 rounded-xl border-2 border-white shadow-lg`}
    >
      <RxArrowUp className="text-3xl" />
    </button>
  )
}
