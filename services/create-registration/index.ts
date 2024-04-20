import { ParticipanteFormData } from '@/components/forms/participantes'
import { sql } from '@vercel/postgres'

export async function createRegistration(
  participanteFormData: ParticipanteFormData,
) {
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
  const { rows, rowCount } = await sql`${sqlText}`

  return { rows, rowCount }
}
