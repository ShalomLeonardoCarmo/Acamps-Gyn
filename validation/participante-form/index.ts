import { z } from 'zod'

export const participanteFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Digite pelo menos 3 letras')
    .max(255, 'Limite de caracteres atingido (255)'),
})
