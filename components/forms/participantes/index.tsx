'use client'

import Modal from '@/components/modal'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export interface ParticipanteFormProps {
  show: boolean
  onClose: () => void
}

export type ClientsFormData = z.infer<typeof participanteFormSschema>

export function ParticipanteForm(props: ParticipanteFormProps) {
  const participanteForm = useForm<ParticipanteFormData>({})

  return (
    <Modal onClose={props.onClose} open={props.show}>
      <div className="bg-white p-2 overflow-auto max-h-[90vh] divide-y rounded-xl">
        <div className="flex flex-col text-center font-semibold">
          <span className="font-bold text-lg">Formulário de inscrição</span>
          <span>participantes</span>
        </div>

        <form></form>
      </div>
    </Modal>
  )
}
