/*
  Warnings:

  - You are about to drop the `promoitonal_codes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "used_codes" DROP CONSTRAINT "used_codes_promoitonal_code_id_fkey";

-- DropTable
DROP TABLE "promoitonal_codes";

-- CreateTable
CREATE TABLE "promotional_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "promotional_codes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "used_codes" ADD CONSTRAINT "used_codes_promoitonal_code_id_fkey" FOREIGN KEY ("promoitonal_code_id") REFERENCES "promotional_codes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
