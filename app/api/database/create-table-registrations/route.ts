import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE ${process.env.NODE_ENV === 'production' ? 'registrations' : 'dev_registrations'} (
        name varchar(255) NOT NULL,
        birthdate date,
        general_registration varchar(255) NOT NULL,
        general_registration_front TEXT NOT NULL,
        general_registration_back TEXT NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(255),
        responsible_contact JSONB,
        have_allergies varchar array,
        food_restriction varchar array,
        frequentlly_use_medication boolean NOT NULL,
        whic_medication JSONB,
        how_find_acamps varchar(255),
        my_friend_called_me varchar(255),
        wich_city SMALLINT NOT NULL,
        city_name varchar(255)
    );`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
