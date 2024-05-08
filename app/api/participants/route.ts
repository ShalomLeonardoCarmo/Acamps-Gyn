import { PrismaClient } from '@prisma/client/extension'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const participants = await prisma.registrations.findMany()

  return NextResponse.json({ data: participants }, { status: 200 })
}
