import { ParticipanteFormData } from '@/components/forms/participantes'
import { db } from '@vercel/postgres'

export async function createRegistration(
  participanteFormData: ParticipanteFormData,
) {
  const client = await db.connect()
  const fields = Object.keys(participanteFormData).join(', ')
  const values = Object.values(participanteFormData)
    .map((val) => {
      if (typeof val === 'object') {
        let newVal = JSON.stringify(val)
        newVal = newVal.replaceAll("'", '"')
        return `'${newVal}'`
      } else if (typeof val === 'string' && val.length === 0) {
        return "''"
      }

      return typeof val === 'number' ? `${val}` : `'${val}'`
    })
    .join(', ')
  const sqlText = `INSERT INTO dev_registrations (${fields}) VALUES (${values});`
  console.log(sqlText)
  await client.sql`INSERT INTO dev_registrations (name, birthdate, general_registration, general_registration_front, general_registration_back, email, phone, responsible_contact, have_allergies, food_restriction, frequentlly_use_medication, wich_medication, how_find_acamps, my_friend_called_me, wich_city, city_name, address) VALUES (${values});`

  return '{ rows, rowCount }'
}
