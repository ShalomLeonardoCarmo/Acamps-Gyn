/* eslint-disable prettier/prettier */
// Redeploy
import { ParticipanteFormData } from '@/components/forms/participantes'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createRegistration(
  participanteFormData: ParticipanteFormData,
) {
  const env = process.env.NODE_ENV

  const newRegistration =
    env === 'development'
      ? await prisma.dev_registrations.create({ data: { ...participanteFormData, servant: false } })
      : await prisma.registrations.create({
        data: { ...participanteFormData, servant: false, habilities: {} },
      })

  console.log(newRegistration)
  // const client = await db.connect()
  // const fields = Object.keys(participanteFormData)
  // const values = Object.values(participanteFormData).map((val) => {
  //   if (typeof val === 'object') {
  //     let newVal = JSON.stringify(val)
  //     newVal = newVal.replaceAll("'", '"')
  //     return `'${newVal}'`
  //   } else if (typeof val === 'string' && val.length === 0) {
  //     return "''"
  //   }

  //   return typeof val === 'number' ? `${val}` : `'${val}'`
  // })
  // const sqlText = `INSERT INTO dev_registrations (${fields}) VALUES (${values});`
  // console.log(sqlText)
  // console.log(Object.keys(participanteFormData).length)
  // console.log(Object.values(participanteFormData).length)
  // const testSql = `INSERT INTO dev_registrations (name,birthdate,general_registration,general_registration_front,general_registration_back,email,phone,responsible_contact,have_allergies,food_restriction,frequentlly_use_medication,wich_medication,how_find_acamps,my_friend_called_me,wich_city,city_name,address) VALUES ('Antonio Leonardo Rolim do Carmo','2004-01-31','20087739342','ldnksdbvhkkb','skjdbvhkbfb','shalomleonardocarmo@gmail.com','6285997012985','{"name":"Teatro João Alves de Queiroz","number":"6565656565"}','Não','[]','false','[]','jnrgfbn','asdkjfkj',4,'','R. Castorina Bittencourt Alves, 349');`
  // await client.sql`INSERT INTO dev_registrations (name,birthdate,general_registration,general_registration_front,general_registration_back,email,phone,responsible_contact,have_allergies,food_restriction,frequentlly_use_medication,wich_medication,how_find_acamps,my_friend_called_me,wich_city,city_name,address) VALUES ('Antonio Leonardo Rolim do Carmo','2004-01-31','20087739342','ldnksdbvhkkb','skjdbvhkbfb','shalomleonardocarmo@gmail.com','6285997012985','{"name":"Teatro João Alves de Queiroz","number":"6565656565"}','Não','[]','false','[]','jnrgfbn','asdkjfkj',4,'','R. Castorina Bittencourt Alves, 349');`

  return '{ rows, rowCount }'
}
