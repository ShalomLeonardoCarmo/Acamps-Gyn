import { getAllParticipants } from '@/services/get-all-participants'
import { NextResponse } from 'next/server'

export async function GET() {
  const participants = await getAllParticipants()

  return NextResponse.json({ data: participants }, { status: 200 })
}
