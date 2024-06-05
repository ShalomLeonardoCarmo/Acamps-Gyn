import prisma from '@/lib/prisma'

export async function getAllServants() {
  const servants = prisma.registrations.findMany({
    where: {
      servant: true,
    },
    orderBy: [{ createdAt: 'desc' }],
  })

  return servants
}
