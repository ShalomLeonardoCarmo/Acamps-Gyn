import supabase from '@/lib/supabase'

export async function uploadFileSupabase(file: File | Blob, path: string) {
  const { data, error } = await supabase.storage
    .from('acampsgyn20242')
    .upload(`${path}`, file, {
      cacheControl: '3600',
      upsert: true,
    })

  if (error) alert('Erro ao subir arquivo')
  return data
}
