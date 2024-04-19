import { z } from 'zod'

export const participanteFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Digite pelo menos 3 letras')
    .max(255, 'Limite de caracteres atingido (255)'),
  birthdate: z.date(),
  general_registration: z
    .string()
    .transform((str) => str.replace(/[^0-9]/g, '')),
  general_registration_front: z.string({
    required_error: 'Foto da frente da identidade é obrigatória',
  }),
  general_registration_back: z.string({
    required_error: 'Foto do verso da identidade é obrigatória',
  }),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().transform((phone) => phone.replace(/[^0-9]/g, '')),
  responsible_contact: z.object({
    name: z
      .string({ required_error: 'Digite o nome do(a) responsável' })
      .min(3, 'Digite pelo menos 3 letras'),
    number: z.string().transform((phone) => phone.replace(/[^0-9]/g, '')),
  }),
  have_allergies: z.nullable(z.string()),
  food_restriction: z.array(z.string()).default([]),
  frequentlly_use_medication: z.boolean().default(false),
  wich_medication: z.object({
    medication_name: z.string(),
    time: z.string(),
  }),
  how_find_acamps: z.nullable(z.string()),
  my_frined_called_me: z.nullable(z.string()),
  wich_city: z.number().default(1),
  city_name: z.nullable(z.string()),
})
