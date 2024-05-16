import prisma from '@/lib/prisma'

export async function getServant(id: number | string) {
  const servant = prisma.registrations.findUnique({
    where: {
      id: Number(id),
      servant: true,
    },
  })

  return servant
}
