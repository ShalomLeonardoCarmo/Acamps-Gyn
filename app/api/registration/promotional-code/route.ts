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
  const hour = now.getHours()

  const isValid: boolean =
  // Check singles code
    month === 5 &&
    ((((day === 7 && hour >= 18) || (day === 8 ) || (day === 9 && hour < 18))
    && promotionalCode?.code === 'CONSOLODOSSOLTEIROSACAMPS')
    ||  
  // Check boyfriends code
    (((day === 12 && hour >= 8) || (day === 13 ) || (day === 14 && hour <= 8))
    && promotionalCode?.code === 'EU&MEUAMORNOACAMPS'))

  return promotionalCode && isValid
    ? NextResponse.json(
      { code: promotionalCode.code, id: promotionalCode.id },
      { status: 200 },
    )
    : NextResponse.json({ data: 'Code not found' }, { status: 404 })
}
