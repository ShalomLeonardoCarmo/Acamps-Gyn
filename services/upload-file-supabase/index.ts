import supabase from '@/lib/supabase'

export async function uploadFileSupabase(file: File | Blob, path: string) {
  await supabase.storage.from('acampsgyn20242').upload(`${path}`, file, {
    cacheControl: '3600',
    upsert: true,
  })

  const { data } = supabase.storage.from('acampsgyn20242').getPublicUrl(path)

  return data.publicUrl
}
