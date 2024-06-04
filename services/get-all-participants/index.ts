import prisma from '@/lib/prisma'

export async function getAllParticipants() {
  const participants = prisma.registrations.findMany({
    where: {
      servant: false,
    },
    orderBy: [{ name: 'asc' }, { birthdate: 'desc' }],
  })

  return participants
}
