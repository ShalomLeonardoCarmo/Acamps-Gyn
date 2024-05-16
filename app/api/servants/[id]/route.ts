import { getServant } from '@/services'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const servant = await getServant(params.id)

  return NextResponse.json(servant, { status: 200 })
}
