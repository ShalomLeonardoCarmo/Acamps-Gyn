'use client'

import Loadding from '@/components/loadding'
import Modal from '@/components/modal'
import { participanteFormSchema } from '@/validation/participante-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { GiCampingTent } from 'react-icons/gi'
import { MdAddCircle, MdOutlineCancel, MdRemoveCircle } from 'react-icons/md'
import { z } from 'zod'
import { ErrorMessage } from '../error-message'
import FormField from '../field'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

export interface ParticipanteFormProps {
  show: boolean
  onClose: () => void
}

export type ParticipanteFormData = z.infer<typeof participanteFormSchema>

export function ParticipanteForm(props: ParticipanteFormProps) {
  const [rg, setRg] = useState('')
  const participanteForm = useForm<ParticipanteFormData>({
    resolver: zodResolver(participanteFormSchema),
    defaultValues: {
      wich_city: 4,
      city_name: '',
    },
  })

  async function submit(formData: ParticipanteFormData) {
    // const { rows, rowCount } = await createRegistration(formData)
    axios.post('/api/database/create-registration', formData).then((result) => {
      console.log(result)
    })

    // console.log(`Row: ${rows}`)
    // console.log(rowCount)
  }

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    clearErrors,
    reset,
  } = participanteForm

  const watchMedication = watch('frequentlly_use_medication')
  const watchWichCity = watch('wich_city')

  const { fields, append, remove } = useFieldArray({
    name: 'wich_medication',
    control,
  })

  useEffect(() => {
    if (watchMedication && fields.length === 0) {
      append({ frequency: '', medication_name: '' })
    } else if (!watchMedication && fields.length > 0) {
      remove()
    }
  }, [append, fields.length, remove, watchMedication])

  return (
    <Modal onClose={props.onClose} open={props.show}>
      <div className="bg-red-50 overflow-auto max-h-[90vh] divide-y rounded-xl w-full max-w-[95vw] md:max-w-[730px] lg:max-w-[1000px]">
        <div className="flex flex-col text-center font-semibold p-2">
          <span className="font-bold text-lg">Formulário de inscrição</span>
          <span>participantes</span>
        </div>

        <div className="flex flex-col">
          <span>Pagamento aqui!</span>
          <span>Espaço do QR Code</span>
        </div>

        <FormProvider {...participanteForm}>
          <form className="divide-y" onSubmit={handleSubmit(submit)}>
            <div className="p-2 gap-4 flex flex-col">
              <FormField>
                <label htmlFor="name">Nome Completo *</label>
                <input
                  required
                  id="name"
                  type="text"
                  {...register('name')}
                  className="p-2 border border-zinc-600 rounded-xl"
                  placeholder="Fulano de Tau"
                />
                <ErrorMessage field="name" />
              </FormField>

              <FormField>
                <label htmlFor="birthdate">Data de Nascimento *</label>
                <input
                  required
                  type="date"
                  id="birthdate"
                  className="w-fit p-2 border border-zinc-600 rounded-xl"
                  {...register('birthdate')}
                />
                <ErrorMessage field="birthdate" />
              </FormField>

              <FormField>
                <label htmlFor="general_registration">Número de RG</label>
                <input
                  required
                  value={rg}
                  type="text"
                  maxLength={12}
                  id="general_registration"
                  placeholder="0123456789-1"
                  className="border border-zinc-600 rounded-xl p-2"
                  {...register('general_registration')}
                  onChange={(e) => {
                    let newRg = e.target.value
                    newRg = newRg.replace(/[^0-9]/g, '')
                    newRg = newRg.replace(/(\d{10})(\d)/, '$1-$2')
                    setRg(newRg)
                  }}
                />
                <ErrorMessage field="general_registration" />
              </FormField>

              <FormField>
                <label htmlFor="">Foto do RG (frente)</label>
                <input required {...register('general_registration_front')} />
                <ErrorMessage field="general_registration_front" />
              </FormField>

              <FormField>
                <label htmlFor="">Foto do RG (verso)</label>
                <input required {...register('general_registration_back')} />
                <ErrorMessage field="general_registration_back" />
              </FormField>

              <FormField>
                <label htmlFor="email">E-mail</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="p-2 border border-zinc-600 rounded-xl"
                  placeholder="email@exemplo.com"
                  {...register('email')}
                />
                <ErrorMessage field="email" />
              </FormField>

              <FormField>
                <label htmlFor="phone">Contato</label>
                <input
                  required
                  id="phone"
                  placeholder="(62) 98888-8888"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('phone')}
                />
                <ErrorMessage field="phone" />
              </FormField>

              <FormField>
                <span>Contato do(a) Responsável</span>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <label htmlFor="responsible_name" className="w-20">
                      Nome
                    </label>
                    <input
                      required
                      type="text"
                      id="responsible_name"
                      placeholder="Responsável"
                      className="p-2 border border-zinc-600 rounded-xl rounded-b-none"
                      {...register('responsible_contact.name')}
                    />
                    <ErrorMessage field="responsible_contact.name" />
                  </div>

                  <div className="flex gap-2 items-center">
                    <label htmlFor="responsible_number" className="w-20">
                      Número
                    </label>
                    <input
                      required
                      type="text"
                      id="responsible_number"
                      placeholder="(62) 98888-8888"
                      className="p-2 border border-zinc-600 rounded-xl rounded-t-none"
                      {...register('responsible_contact.number')}
                    />
                    <ErrorMessage field="responsible_contact.number" />
                  </div>
                </div>
              </FormField>

              <FormField>
                <label htmlFor="have_allergies">
                  Possui alguma alergia? Se sim, quais?
                </label>
                <input
                  required
                  id="have_allergies"
                  placeholder="Corante, Amendoin"
                  className="p-2 border border-zinc-600 rounded-xl"
                  {...register('have_allergies')}
                />
                <ErrorMessage field="have_allergies" />
              </FormField>

              <FormField>
                <label htmlFor="food_restriction">
                  Possui alguma restrição alimentar? Se sim, quais?
                </label>
                <input
                  required
                  id="food_restriction"
                  placeholder="Intolerância a lactose, intolerância a glúten"
                  className="p-2 border border-zinc-600 rounded-xl"
                />
                <ErrorMessage field="food_restriction" />
              </FormField>

              <FormField>
                <div className="flex gap-1">
                  <label htmlFor="use-medication">Usa alguma medicação?</label>
                  <input
                    id="use-medication"
                    type="checkbox"
                    onChange={(e) =>
                      setValue('frequentlly_use_medication', e.target.checked)
                    }
                  />

                  {watchMedication && (
                    <button
                      type="button"
                      title="Adicionar Medicação"
                      className="text-green-500 ml-4"
                      onClick={() =>
                        append({ frequency: '', medication_name: '' })
                      }
                    >
                      <MdAddCircle size={25} />
                    </button>
                  )}
                </div>
                {watchMedication && (
                  <Fragment>
                    {fields.map((field, index) => (
                      <div
                        className="flex bg-zinc-400 rounded-lg m-1 p-1 gap-1 justify-center sm:items-center flex-col sm:flex-row"
                        key={field.id}
                      >
                        <div className="flex-col flex">
                          <label
                            htmlFor={`wich_medication.${index}.medication_name`}
                          >
                            Nome da medicação
                          </label>
                          <input
                            required
                            id={`wich_medication.${index}.medication_name`}
                            placeholder="Dipirona"
                            className="border border-zinc-600 p-1 rounded-xl"
                            {...register(
                              `wich_medication.${index}.medication_name`,
                            )}
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor={`wich_medication.${index}.frequency`}>
                            Com que frequência usa
                          </label>
                          <input
                            required
                            id={`wich_medication.${index}.frequency`}
                            placeholder="08:00h, 16:00h e 00:00h"
                            className="border border-zinc-600 p-1 rounded-xl"
                            {...register(`wich_medication.${index}.frequency`)}
                          />
                        </div>
                        {index > 0 && (
                          <button>
                            <MdRemoveCircle
                              size={25}
                              type="button"
                              className="text-red-700"
                              onClick={() => {
                                remove(index)
                              }}
                            />
                          </button>
                        )}
                      </div>
                    ))}
                  </Fragment>
                )}
              </FormField>

              <FormField>
                <label htmlFor="how_find_acamps">
                  Como ficou sabendo do Acamp&apos;s?
                </label>
                <input
                  required
                  id="how_find_acamps"
                  placeholder="Vi no Instagram de um amigo"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('how_find_acamps')}
                />
                <ErrorMessage field="how_find_acamps" />
              </FormField>

              <FormField>
                <label htmlFor="myFriendCalledMe">
                  MEU AMIGO ME CHAMOU!
                  <br />
                  Coloque o nome da pessoa que te convidou para o Acamp&apos;s
                </label>
                <input
                  id="myFriendCalledMe"
                  placeholder="João Pedro"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('my_friend_called_me')}
                />
                <ErrorMessage field="my_friend_called_me" />
              </FormField>

              <FormField>
                <label htmlFor="wichCity">Em qual cidade você reside?</label>
                <select
                  required
                  id="wichCity"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('wich_city')}
                >
                  <option disabled>Selecione uma opção</option>
                  <option value={1}>Anápolis</option>
                  <option value={2}>Campestre</option>
                  <option value={3}>Goianésia</option>
                  <option value={4}>Goiânia</option>
                  <option value={5}>Outra. Qual?</option>
                </select>
                <ErrorMessage field="wich_city" />

                {Number(watchWichCity) === 5 && (
                  <Fragment>
                    <label htmlFor="cityName">Informe o nome da cidade</label>
                    <input
                      required
                      id="cityName"
                      className="p-2 rounded-xl border border-zinc-600"
                      placeholder="Cidade de Goiás"
                      {...register('city_name')}
                    />
                    <ErrorMessage field="city_name" />
                  </Fragment>
                )}
              </FormField>

              <FormField>
                <label htmlFor="address">Informe seu endereço</label>
                <input
                  required
                  id="address"
                  placeholder="Av. C-205, Setor Jardim América N° 400 - Goiânia/GO"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('address')}
                />
                <ErrorMessage field="address" />
              </FormField>
            </div>

            <div className="flex gap-2 p-2 w-full items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
              bg-red-600 flex items-center justify-center
              sm:gap-2 p-2 rounded-xl font-bold text-yellow-200
              transition-all hover:bg-red-800 text-[13px] sm:text-base
            "
              >
                {isSubmitting ? <Loadding /> : <GiCampingTent size={25} />}
                REALIZAR INSCRIÇÃO
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  clearErrors()
                  reset()
                  props.onClose()
                }}
                className="
              border border-red-500 flex items-center
              justify-center gap-2 p-2 font-semibold text-red-600 rounded-xl
              transition-all
              hover:bg-red-600
              hover:text-yellow-200
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
