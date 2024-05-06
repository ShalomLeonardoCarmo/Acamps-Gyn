import { z } from 'zod'

export const servoFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Digite pelo menos 3 letras')
    .max(255, 'Limite de caracteres atingido (255)'),
  birthdate: z.string().transform((val) => {
    console.log(new Date(val).toISOString())
    return new Date(val).toISOString()
  }),
  general_registration: z
    .string()
    .transform((str) => str.replace(/[^0-9]/g, '')),
  general_registration_front: z
    .string({
      required_error: 'Foto da frente da identidade é obrigatória',
    })
    .default(''),
  general_registration_back: z
    .string({
      required_error: 'Foto do verso da identidade é obrigatória',
    })
    .default(''),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().transform((phone) => phone.replace(/[^0-9]/g, '')),
  responsible_contact: z.object({
    name: z
      .string({ required_error: 'Digite o nome do(a) responsável' })
      .min(3, 'Digite pelo menos 3 letras'),
    number: z.string().transform((phone) => phone.replace(/[^0-9]/g, '')),
  }),
  have_allergies: z.string().default(''),
  food_restriction: z.string().default(''),
  frequentlly_use_medication: z.boolean().default(false),
  wich_medication: z
    .array(
      z.object({
        medication_name: z.string(),
        frequency: z.string(),
      }),
    )
    .default([]),
  how_find_acamps: z.string().default(''),
  my_friend_called_me: z.string().default(''),
  wich_city: z
    .string()
    .default('5')
    .or(z.number())
    .transform((city) => parseInt(String(city))),
  city_name: z.string().default(''),
  address: z.string(),
  payment: z.string().default(''),
  member_type: z
    .string()
    .default('4')
    .or(z.number())
    .transform((member) => parseInt(String(member))),
  habilities: z
    .object({
      tocar: z.boolean().default(false),
      cozinhar: z.boolean().default(false),
      dancar_atuar_maquiar: z.boolean().default(false),
      relacionamento_com_pessoas: z.boolean().default(false),
      vendas: z.boolean().default(false),
      cnh: z.boolean().default(false),
      balde_vassoura: z.boolean().default(false),
      planilhas: z.boolean().default(false),
      midias_sociais_edicao_video_foto: z.boolean().default(false),
      enfermeiro_medico_socorrista: z.boolean().default(false),
      decorar_acolher_pessoas: z.boolean().default(false),
      organizacao_seguranca: z.boolean().default(false),
      liturgia: z.boolean().default(false),
      escutar_jovens: z.boolean().default(false),
      estrutura: z.boolean().default(false),
      outros: z.string().default(''),
    })
    .default({}),
})
