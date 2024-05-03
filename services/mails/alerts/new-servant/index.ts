import { Resend } from 'resend'

export async function internalAlertServant() {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: `Shalom Goiânia <${process.env.PJJ_EMAIL}>`,
    to: [String(process.env.PJJ_EMAIL), String(process.env.APOSTOLICA_EMAIL)],
    subject: 'Inscrição de novo participante',
    html: '<p>Um novo servo acabou de realizar sua inscrição!!! Confira os dados no site</p><a href="https://acampsgyn.vercel.app/">https://acampsgyn.vercel.app/</a>',
  })

  if (error) {
    console.error(error)
  }

  console.log(data)
}
