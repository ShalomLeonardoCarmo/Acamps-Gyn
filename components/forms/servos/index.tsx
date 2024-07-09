'use client'

import Loadding from '@/components/loadding'
import Modal from '@/components/modal'
import Tooltip from '@/components/tootlip'
import { servoFormSchema } from '@/validation/servo-form'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { GiCampingTent } from 'react-icons/gi'
import {
  MdAddCircle,
  MdRemoveCircle,
  MdOutlineCancel,
  MdCheckCircle,
  MdOutlineCheckCircle,
} from 'react-icons/md'
import { z } from 'zod'
import { ErrorMessage } from '../error-message'
import FormField from '../field'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { uploadFileSupabase } from '@/services'
import TermsModal from '@/components/terms'
import { useRouter } from 'next/navigation'

export interface ServoFormProps {
  show: boolean
}

export type ServoFormData = z.infer<typeof servoFormSchema>

export function ServoForm(props: ServoFormProps) {
  const { push } = useRouter()
  const inputRgFrontRef = useRef<HTMLInputElement>(null)
  const inputRgBackRef = useRef<HTMLInputElement>(null)
  const inputPaymentRef = useRef<HTMLInputElement>(null)
  const [habilities, setHabilities] = useState(false)

  const [responsible, setResponsible] = useState(false)
  const [openTermsModal, setOpenTermsModal] = useState(false)
  const [accept, setAccept] = useState(false)

  const [rg, setRg] = useState('')

  const servoForm = useForm<ServoFormData>({
    resolver: zodResolver(servoFormSchema),
    defaultValues: {
      wich_city: 4,
      city_name: '',
    },
  })

  function handleClose() {
    clearErrors()
    reset()
    push('/inscricao')
  }

  async function submit(formData: ServoFormData) {
    if (!inputRgBackRef.current?.files) {
      return alert('Insira a foto do RG (verso)')
    }
    if (!inputRgFrontRef.current?.files) {
      return alert('Insira a foto do RG (frente)')
    }
    if (!inputPaymentRef.current?.files) {
      return alert('Insira o comprovante de pagamento')
    }

    const rgFrontFile = inputRgFrontRef.current.files[0]
    const rgBackFile = inputRgBackRef.current.files[0]
    const paymentFile = inputPaymentRef.current.files[0]

    const rgFrontData = await uploadFileSupabase(
      rgFrontFile,
      `rg - frente/${getValues('general_registration')}-front.${rgFrontFile.name.split('.').pop()}`,
    )
    const rgBackData = await uploadFileSupabase(
      rgBackFile,
      `rg - verso/${getValues('general_registration')}-back.${rgBackFile.name.split('.').pop()}`,
    )
    const paymentData = await uploadFileSupabase(
      paymentFile,
      `pagamento/${getValues('general_registration')}-payment.${paymentFile.name.split('.').pop()}`,
    )

    formData.general_registration_back = rgBackData
    formData.general_registration_front = rgFrontData
    formData.payment = paymentData

    axios
      .post('/api/database/create-servant', formData)
      .then(() => {
        alert('Inscrição realizada com sucesso')
        setRg('')
        reset()
        setHabilities(false)
        push('/inscricao')
      })
      .catch((error) => {
        alert(
          'Erro ao realizar inscrição. Confira se todos os campos foram preenchidos',
        )
        console.error(error)
      })
  }

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    control,
    clearErrors,
    reset,
  } = servoForm

  const watchMedication = watch('frequentlly_use_medication')
  const watchWichCity = watch('wich_city')
  const watchBirthdate = watch('birthdate')

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

  useEffect(() => {
    const birthdate = getValues('birthdate').split('-')
    if (birthdate.length === 3) {
      const time = Date.now()
      const now = new Date(time)
      const year = now.getFullYear()
      const month = now.getMonth() + 1
      const day = now.getDate()
      const bYear = Number(birthdate[0])
      const bMonth = Number(birthdate[1])
      const bDay = Number(birthdate[2])

      if (bYear > 1900) {
        if (year - bYear > 18) {
          setResponsible(true)
        } else if (year - bYear === 18) {
          if (month > bMonth) {
            console.log('Sim')
            setResponsible(true)
          } else if (month === bMonth) {
            if (day >= bDay) {
              setResponsible(true)
            } else {
              setResponsible(false)
            }
          } else {
            console.log('Sim 3')
            setResponsible(false)
          }
        } else {
          setResponsible(false)
        }
      }
    }
  }, [getValues, watchBirthdate])

  return (
    <Modal onClose={() => push('/inscricao')} open={props.show}>
      <div className="bg-red-50 overflow-auto max-h-[90vh] divide-y rounded-xl w-full max-w-[95vw] md:max-w-[730px] lg:max-w-[1000px]">
        <div className="flex flex-col text-center font-semibold p-2">
          <span className="font-bold text-lg">Formulário de inscrição</span>
          <span>Servos</span>
        </div>

        {/* <div className="flex flex-col">
          <span className="p-2 text-center">
            Prepara-se para as melhores férias da sua vida! 🏕️✨
            <br />
            <br />
            Acamp&apos;s Goiânia já está de volta e melhor do que nunca em julho
            de 2024!!! Lançou! 🚀
            <br />
            <br />
            Momentos de muito lazer, muita animação, mergulhos na piscina, e
            alegria sem fim te esperam.
            <br />
            Quando?
            <br />
            🗓️ Data: 10 a 14 de Julho
            <br />
            📍Local: Espaço Arvoredo
            <br />
            <br />
            Vocês não podem perder!!
            <br />
            <br />
            📣 Inscrições oficialmente abertas e o 1° lote vai até 21/05 ou até
            terminarem as vagas (são só 10 ein).
            <br />
            <br />
            Corre e garanta sua vaga nessa aventura dos melhores dias da sua
            vida. Vagas limitadas.
            <br />
            <br />
            Veeeeeem 🗣️🗣️
          </span>
        </div> */}

        <FormProvider {...servoForm}>
          <form
            className="divide-y accent-red-600"
            onSubmit={handleSubmit(submit)}
          >
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
                <label htmlFor="member_type">Você faz parte da...</label>
                <select
                  required
                  id="member_type"
                  className="p-2 rounded-xl border border-zinc-600"
                  {...register('member_type')}
                >
                  <option disabled>Selecione uma opção</option>
                  <option value={1}>Comunidade de Vida</option>
                  <option value={2}>Comunidade Aliança</option>
                  <option value={3}>Obra</option>
                </select>
              </FormField>

              <FormField>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-1 divide-x">
                  <div className="flex gap-1 items-center">
                    <label htmlFor="tocar">Tocar/Cantar</label>
                    <input
                      id="tocar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.tocar', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="cozinhar">Cozinhar #masterchef</label>
                    <input
                      id="cozinhar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.cozinhar', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="dancar">Dançar/Atuar/Maquiar</label>
                    <input
                      id="dancar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.dancar_atuar_maquiar',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="relacionamento">
                      Sou bom/boa de relacionamento com as pessoas
                    </label>
                    <input
                      id="relacionamento"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.relacionamento_com_pessoas',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="vendas">Sou bom/boa de vendas</label>
                    <input
                      id="vendas"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.vendas', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="cnh">Tenho CNH #Piloto</label>
                    <input
                      id="cnh"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.cnh', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="balde">Gosto de um balde/vassoura</label>
                    <input
                      id="balde"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.balde_vassoura', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="planilhas">
                      Tenho habilidade com planilhas
                    </label>
                    <input
                      id="planilhas"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.planilhas', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="social">
                      Entendo de mídias sociais e programas de edição de
                      vídeo/foto
                    </label>
                    <input
                      id="social"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.midias_sociais_edicao_video_foto',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="saude">
                      Enfermeiro(a) / Médico(a) / Socorrista
                    </label>
                    <input
                      id="saude"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.enfermeiro_medico_socorrista',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="decorar">
                      Curto decorar e acolher as pessoas
                    </label>
                    <input
                      id="decorar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.decorar_acolher_pessoas',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="organizar">
                      Organização e segurança é comigo mesmo(a)
                    </label>
                    <input
                      id="organizar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue(
                          'habilities.organizacao_seguranca',
                          e.target.checked,
                        )
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="liturgia">
                      Gosto de favorecer a experiência dos jovens pela liturgia
                    </label>
                    <input
                      id="liturgia"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.liturgia', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="escutar">
                      Escutar os jovens é minha alegria
                    </label>
                    <input
                      id="escutar"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.escutar_jovens', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <label htmlFor="estrutura">
                      Ajudar na estrutura do evento é meu ponto forte
                    </label>
                    <input
                      id="estrutura"
                      type="checkbox"
                      onChange={(e) =>
                        setValue('habilities.estrutura', e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex gap-1 items-center col-span-full">
                    <label htmlFor="outros">Outras habilidades. Quais?</label>
                    <input
                      id="outros"
                      type="checkbox"
                      onChange={(e) => setHabilities(e.target.checked)}
                    />

                    {habilities && (
                      <>
                        <input
                          required
                          placeholder="Digite aqui suas habilidades"
                          className="p-2 w-full rounded-xl border border-zinc-600"
                          {...register('habilities.outros')}
                        />
                      </>
                    )}
                  </div>
                </div>
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

              {responsible && (
                <FormField>
                  <label htmlFor="cpf">Número de CPF *</label>
                  <input
                    required
                    type="text"
                    maxLength={12}
                    id="cpf"
                    placeholder="Digite o seu CPF"
                    className="border border-zinc-600 rounded-xl p-2"
                    {...register('cpf')}
                  />
                  <ErrorMessage field="general_registration" />
                </FormField>
              )}

              <FormField>
                <label htmlFor="general_registration">Número de RG *</label>
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
                <label htmlFor="">Foto do RG (frente) *</label>
                <input required ref={inputRgFrontRef} type="file" />
                <ErrorMessage field="general_registration_front" />
              </FormField>

              <FormField>
                <label htmlFor="">Foto do RG (verso) *</label>
                <input required ref={inputRgBackRef} type="file" />
                <ErrorMessage field="general_registration_back" />
              </FormField>

              <FormField>
                <label htmlFor="email">E-mail *</label>
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
                <span>Contato do(a) Responsável *</span>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <label htmlFor="responsible_name" className="w-20">
                      Nome *
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
                      Número *
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
                  Possui alguma alergia? Se sim, quais? *
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
                  Possui alguma restrição alimentar? Se sim, quais? *
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
                            Nome da medicação *
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
                            Com que frequência usa *
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
                  Como ficou sabendo do Acamp&apos;s? *
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
                <label htmlFor="wichCity">Em qual cidade você reside? *</label>
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
                    <label htmlFor="cityName">Informe o nome da cidade *</label>
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
                <label htmlFor="address">Informe seu endereço *</label>
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

            <div className="flex flex-col w-full text-center p-2">
              <span className="font-bold text-xl">
                PARA REALIZAR O PAGAMENTO VIA CARTÃO DE CRÉDITO, BOLETO BANCÁRIO
                OU PIX, ACESSE O LINK:
              </span>
              <Link
                href="https://pag.ae/7-DTDsTCH"
                target="_blank"
                className="text-blue-600 font-bold text-lg"
              >
                https://pag.ae/7-DTDsTCH
              </Link>
            </div>
            <div className="flex flex-col w-full text-center p-2">
              <span className="font-bold text-xl">
                OU SE PREFERIR, UTILIZE NOSSA CHAVE PIX:
              </span>
              <Tooltip text="Clique para copiar">
                <button
                  className="text-blue-600 font-bold text-lg"
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      'economatogoiania@comshalom.org',
                    )
                    alert('Chave PIX copiada com sucesso')
                  }}
                >
                  economatogoiania@comshalom.org
                </button>
              </Tooltip>
              <span className="font-semibold text-lg">
                e envie um PIX no valor de R$ 229,90
              </span>
            </div>

            <div className="p-2 flex flex-col">
              <label>Anexe o comprovante de pagamento *</label>
              <input required type="file" ref={inputPaymentRef} />
              <ErrorMessage field="payment" />
            </div>

            {responsible && (
              <>
                <div className="flex w-full p-2 justify-center">
                  <button
                    className="flex gap-1 items-center"
                    type="button"
                    onClick={() => setOpenTermsModal(true)}
                  >
                    {accept ? (
                      <MdCheckCircle size={20} className="text-red-600" />
                    ) : (
                      <MdOutlineCheckCircle size={20} />
                    )}
                    Eu li e concordo com os termos de uso de imagem, voz e nome
                  </button>
                </div>
                <TermsModal
                  accept={accept}
                  setAccept={setAccept}
                  onClose={() => {
                    setOpenTermsModal(false)
                  }}
                  show={openTermsModal}
                />
              </>
            )}

            <div className="flex gap-2 p-2 w-full items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting || (responsible && !accept)}
                className="
                disabled:bg-red-800
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
                onClick={handleClose}
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
