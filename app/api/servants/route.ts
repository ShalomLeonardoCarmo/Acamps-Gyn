import { getAllServants } from '@/services'
import { NextResponse } from 'next/server'

export const revalidate = 0

export async function GET() {
  const servants = await getAllServants()

  return NextResponse.json(servants, { status: 200 })
}
