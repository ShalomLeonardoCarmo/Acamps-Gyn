import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE users (name varchar(255) NOT NULL, birthdate date, cpf varchar(11), email varchar(255) NOT NULL, phone varchar(255), responsible_person_number varchar(255) NOT NULL, frequently_use_medication boolean NOT NULL, medication_name varchar(255), how_find_acamps varchar(255), wich_city SMALLESTINT NOT NULL, other_city_name varchar(255), my_friend_called_me varchar(255))`
    return NextResponse.json({result}, {status: 201})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
