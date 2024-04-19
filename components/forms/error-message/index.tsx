'use client'
import { getFieldError } from '@/validation/get-field-error'
import { useFormContext } from 'react-hook-form'

interface ErrorMessageProps {
  field: string
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()

  const fieldError = getFieldError(errors, field)

  if (!fieldError) {
    return null
  }

  return (
    <span className="text-sm text-red-600 mt-1 font-semibold">
      {fieldError.message?.toString()}
    </span>
  )
}
