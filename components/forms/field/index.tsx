import React from 'react'

export interface FormFieldProps {
  children: React.ReactNode
}

export default function FormField(props: FormFieldProps) {
  return <div className="flex flex-col">{props.children}</div>
}
