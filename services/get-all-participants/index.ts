import prisma from '@/lib/prisma'

export async function getAllParticipants() {
  const participants = prisma.registrations.findMany({
    where: {
      servant: false,
    },
  })

  return participants
}
