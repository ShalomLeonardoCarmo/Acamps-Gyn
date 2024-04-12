import React from 'react'

export interface TooltipProps {
  text: string
  children: React.ReactNode
  position?: 'right' | 'left' | 'top' | 'bottom'
}

export default function Tooltip(props: TooltipProps) {
  return (
    <div className="group relative flex justify-center">
      {props.children}
      <span className="group-hover:visible -top-[140%] invisible text-sm font-semibold bg-zinc-700 text-white text-center p-2 rounded-md absolute z-10">
        {props.text}
      </span>
    </div>
  )
}
