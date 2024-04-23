/*
  Warnings:

  - Added the required column `payment` to the `dev_registrations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment` to the `registrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dev_registrations" ADD COLUMN     "payment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "payment" TEXT NOT NULL;
