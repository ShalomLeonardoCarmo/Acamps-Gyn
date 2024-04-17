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
          Authorization: 'Bearer D3CF8978EEEE960AA4254FB9D070A088',
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
