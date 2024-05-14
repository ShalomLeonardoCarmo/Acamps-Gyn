-- CreateTable
CREATE TABLE "promoitonal_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "promoitonal_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "used_codes" (
    "id" SERIAL NOT NULL,
    "promoitonal_code_id" INTEGER NOT NULL,
    "registration_id" INTEGER NOT NULL,

    CONSTRAINT "used_codes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "used_codes" ADD CONSTRAINT "used_codes_promoitonal_code_id_fkey" FOREIGN KEY ("promoitonal_code_id") REFERENCES "promoitonal_codes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "used_codes" ADD CONSTRAINT "used_codes_registration_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "registrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
