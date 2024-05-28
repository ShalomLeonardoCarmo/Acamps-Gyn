'use client'

import supabase from '@/lib/supabase'
import { useState } from 'react'

export default function TestPage() {
  const [file, setFile] = useState<File>()

  async function uploadFile() {
    if (file) {
      const { data, error } = await supabase.storage
        .from('acampsgyn20242')
        .upload('files/test1.png', file, {
          cacheControl: '3600',
          upsert: false,
        })
      if (error) console.log(error)
      if (data) console.log(data)
    }
  }

  return (
    <main>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files ? e.target.files[0] : undefined)
        }}
      />
      <button onClick={uploadFile}>Clique para subir</button>
    </main>
  )
}
