/* eslint-disable prettier/prettier */
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const body = await new Response(request.body).text()
  const jsonBody = JSON.parse(body)

  const promotionalCode = await prisma.promotional_codes.findUnique({
    where: {
      code: String(jsonBody.promotional_code),
      status: true,
    },
  })

  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth()

  const isValid: boolean = month === 6 && day > 3 && day < 8 && promotionalCode?.code === 'EU&MEUAMIGOACAMPS'

  return promotionalCode && isValid
    ? NextResponse.json(
      { code: promotionalCode.code, id: promotionalCode.id },
      { status: 200 },
    )
    : NextResponse.json({ data: 'Code not found' }, { status: 404 })
}
