import React, { useCallback, useEffect } from 'react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal(props: ModalProps) {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === 'backdrop') {
        props.onClose()
      }
    },
    [props],
  )
  const handleEscDow = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose()
      }
    },
    [props],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEscDow)
    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('keydown', handleEscDow)
      window.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick, handleEscDow])

  return (
    <dialog
      id="backdrop"
      className={`fixed top-0 left-0 w-full h-full bg-black transition-all ${props.open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity bg-opacity-50 z-50 overflow-hidden backdrop-blur flex justify-center items-center`}
    >
      {props.children}
    </dialog>
  )
}
