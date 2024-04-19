'use client'

import Loadding from '@/components/loadding'
import Modal from '@/components/modal'
import { participanteFormSchema } from '@/validation/participante-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { GiCampingTent } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'
import { z } from 'zod'
import { ErrorMessage } from '../error-message'
import FormField from '../field'

export interface ParticipanteFormProps {
  show: boolean
  onClose: () => void
}

export type ParticipanteFormData = z.infer<typeof participanteFormSchema>

export function ParticipanteForm(props: ParticipanteFormProps) {
  const participanteForm = useForm<ParticipanteFormData>({
    resolver: zodResolver(participanteFormSchema),
  })

  async function submit(formData: ParticipanteFormData) {
    console.log(formData)

    reset()
  }

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = participanteForm

  return (
    <Modal onClose={props.onClose} open={props.show}>
      <div className="bg-white overflow-auto max-h-[90vh] divide-y rounded-xl w-full max-w-[95vw] md:max-w-[730px] lg:max-w-[1000px]">
        <div className="flex flex-col text-center font-semibold p-2">
          <span className="font-bold text-lg">Formulário de inscrição</span>
          <span>participantes</span>
        </div>

        <FormProvider {...participanteForm}>
          <form className="divide-y" onSubmit={handleSubmit(submit)}>
            <div className="p-2">
              <FormField>
                <label htmlFor="name">Nome Completo</label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="p-2 border border-zinc-600 rounded-xl"
                  placeholder="Fulano de Tau"
                />
                <ErrorMessage field="name" />
              </FormField>
            </div>

            <div className="flex gap-2 p-2 w-full items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
              bg-red-600 flex items-center justify-center
              gap-2 p-2 rounded-xl font-bold text-white
              transition-all hover:bg-red-800
            "
              >
                {isSubmitting ? <Loadding /> : <GiCampingTent size={25} />}
                REALIZAR INSCRIÇÃO
              </button>

              <button
                disabled={isSubmitting}
                onClick={() => {
                  reset()
                  props.onClose()
                }}
                className="
              border border-red-500 flex items-center
              justify-center gap-2 p-2 font-semibold text-red-600 rounded-xl
              transition-all
              hover:bg-red-600
              hover:text-white
              hover:bg-opacity-90
            "
              >
                <MdOutlineCancel size={25} />
                CANCELAR
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  )
}
