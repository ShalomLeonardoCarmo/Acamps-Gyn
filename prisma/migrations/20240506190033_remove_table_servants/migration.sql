/*
  Warnings:

  - You are about to drop the `servants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "servants" DROP CONSTRAINT "servants_registrationId_fkey";

-- AlterTable
ALTER TABLE "dev_registrations" ADD COLUMN     "habilities" JSONB;

-- DropTable
DROP TABLE "servants";
