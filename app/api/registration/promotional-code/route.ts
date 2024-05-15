import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const body = await new Response(request.body).text()
  const jsonBody = JSON.parse(body)

  const promotionalCode = await prisma.promotional_codes.findMany({
    where: {
      code: String(jsonBody.promotional_code),
    },
  })

  return NextResponse.json(
    { data: promotionalCode.length ? 'ok' : 'not found' },
    { status: promotionalCode.length ? 200 : 404 },
  )
}
