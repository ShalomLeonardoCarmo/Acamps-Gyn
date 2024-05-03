import { createServant } from '@/services'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await new Response(request.body).text()

  await createServant(JSON.parse(body))

  return NextResponse.json({ result: 'Sucesso' }, { status: 201 })
}
