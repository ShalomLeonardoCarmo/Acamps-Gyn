'use client'
import axios from 'axios'

interface PromotionalCode {
  id: number
  code: string
}

export async function checkPromotionalCode(
  code: string,
): Promise<PromotionalCode | null> {
  let handledCode: PromotionalCode | null = null

  try {
    const { data, status } = await axios.post(
      '/api/registration/promotional-code',
      {
        promotional_code: code,
      },
    )

    if (status === 200) {
      handledCode = data
    } else {
      alert('Código promocional inválido')
      handledCode = null
    }
  } catch (error) {
    alert('Código promocional inválido')
  }

  return handledCode
}
