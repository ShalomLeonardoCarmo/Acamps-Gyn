/* eslint-disable prettier/prettier */
// Redeploy
import { ServoFormData } from '@/components/forms/servos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createServant(
  servoFormData: ServoFormData,
) {
  const newServant = await prisma.registrations.create({ data: { ...servoFormData, servant: true } })
  const servantHabilities = servoFormData.habilities
  const servantRelation = await prisma.servants.create({ data: { habilities: servantHabilities, registrationId: newServant.id } })

  return { data: { ...newServant, ...servantRelation } }
}
