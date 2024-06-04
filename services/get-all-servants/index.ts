import prisma from '@/lib/prisma'

export async function getAllServants() {
  const servants = prisma.registrations.findMany({
    where: {
      servant: true,
    },
    orderBy: [{ name: 'asc' }, { birthdate: 'asc' }],
  })

  return servants
}
