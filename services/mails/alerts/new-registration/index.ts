import emailjs from '@emailjs/browser'

export async function internalAlertRegistration() {
  emailjs.send(
    String(process.env.EMAILJS_SERVICE_ID),
    'new_registration',
    {},
    {
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
    },
  )
}
