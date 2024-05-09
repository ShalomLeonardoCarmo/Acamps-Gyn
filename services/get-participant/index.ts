import prisma from '@/lib/prisma'

export async function getParticipant(id: number | string) {
  const participant = prisma.registrations.findUnique({
    where: {
      id: Number(id),
    },
  })

  return participant
}
