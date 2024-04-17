'use client'

import axios from 'axios'
import { useState } from 'react'

export default function InscricaoPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [productData, setProductData] = useState({
    customer: {
      name: 'khefuwgvef',
      email: 'kshfhjb@teste.com',
      tax_id: '61739303318',
    },
    reference_id: 'acampsgyn',
    items: [
      {
        name: 'Acamps',
        quantity: 1,
        unit_amount: 27990,
      },
    ],
    qr_codes: [{ amount: { value: '27990' } }],
  })

  function generateProductPix() {
    const data = {}
    axios
      .post('https://api.pagseguro.com/oders', data, {
        headers: {
          'Access-Control-Allow-Origin': 'https://acampsgyn.vercel.app/',
          Authorization:
            'Bearer bbc30c59-06c1-4d83-a3ff-02b225f411f002045c104336ad028a086f72245306683ac8-c5fa-4d2b-a4ca-b20e4dd0b37b',
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
