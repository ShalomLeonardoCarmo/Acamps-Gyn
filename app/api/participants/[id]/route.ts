import { getParticipant } from '@/services/get-participant'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const participant = await getParticipant(params.id)

  return NextResponse.json(participant, { status: 200 })
}
