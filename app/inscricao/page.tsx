'use client'

import axios from 'axios'
import { useState } from 'react'

export default function InscricaoPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [productData, setProductData] = useState({
    customer: {
      name: 'Teste',
      tax_id: '61739303318',
      email: 'teste@teste.com',
    },
    reference_id: 'ex-00001',
  })

  function generateProductPix() {
    const data = {}
    axios
      .post('https://api.pagseguro.com/oders', data, {
        headers: {
          Authorization:
            'Bearer b6237c01-f234-4286-96e4-7260b501fcef552f42a449bfa94488662a294c51b1ab1ea6-27f6-461a-b34f-1f544165ef4a',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((response) => {
        setProductData(response.data)
      })
      .catch((error) => {
        alert('Erro')
        console.error(error)
      })
  }

  return (
    <main className="flex flex-col">
      <span>Essa é a página de inscrições</span>
      <button
        onClick={generateProductPix}
        className="flex p-2 bg-blue-500 w-fit rounded-xl"
      >
        Clique aqui para testar
      </button>
      <pre>{String(productData)}</pre>
    </main>
  )
}