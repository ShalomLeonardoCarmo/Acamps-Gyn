import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getParticipants() {
  const allParticipants = await prisma.registrations.findMany()

  return allParticipants
}
