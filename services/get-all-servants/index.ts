import prisma from '@/lib/prisma'

export async function getAllServants() {
  const servants = prisma.registrations.findMany({
    where: {
      servant: true,
    },
  })

  return servants
}
