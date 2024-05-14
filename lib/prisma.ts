import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

const prisma: PrismaClient = new PrismaClient()

export default prisma
