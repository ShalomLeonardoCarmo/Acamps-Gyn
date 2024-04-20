import { createRegistration } from '@/services'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await new Response(request.body).text()
  console.log(body)

  await createRegistration(JSON.parse(body))

  return NextResponse.json({ result: 'Sucesso' }, { status: 201 })
}
