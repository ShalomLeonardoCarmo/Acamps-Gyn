/* eslint-disable prettier/prettier */
// Redeploy
import { ParticipanteFormData } from '@/components/forms/participantes'
import { ServoFormData } from '@/components/forms/servos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createServant(
  servoFormData: ServoFormData,
) {
  const handledData: ParticipanteFormData = servoFormData

  const newServant = await prisma.registrations.create({ data: { ...handledData, } })
  const servantHabilities = servoFormData.habilities
  const servantRelation = await prisma.servants.create({ data: { habilities: servantHabilities, registrationId: newServant.id } })

  return { data: { ...newServant, ...servantRelation } }
}
