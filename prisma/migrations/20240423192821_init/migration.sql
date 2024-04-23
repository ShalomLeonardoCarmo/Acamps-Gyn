-- CreateTable
CREATE TABLE "registrations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "general_registration" TEXT NOT NULL,
    "general_registration_front" TEXT NOT NULL,
    "general_registration_back" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "responsible_contact" JSONB NOT NULL,
    "have_allergies" TEXT NOT NULL,
    "food_restriction" TEXT NOT NULL,
    "frequentlly_use_medication" BOOLEAN NOT NULL,
    "wich_medication" JSONB NOT NULL,
    "how_find_acamps" TEXT NOT NULL,
    "my_friend_called_me" TEXT NOT NULL,
    "wich_city" INTEGER NOT NULL,
    "city_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dev_registrations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "general_registration" TEXT NOT NULL,
    "general_registration_front" TEXT NOT NULL,
    "general_registration_back" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "responsible_contact" JSONB NOT NULL,
    "have_allergies" TEXT NOT NULL,
    "food_restriction" TEXT NOT NULL,
    "frequentlly_use_medication" BOOLEAN NOT NULL,
    "wich_medication" JSONB NOT NULL,
    "how_find_acamps" TEXT NOT NULL,
    "my_friend_called_me" TEXT NOT NULL,
    "wich_city" INTEGER NOT NULL,
    "city_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dev_registrations_pkey" PRIMARY KEY ("id")
);
