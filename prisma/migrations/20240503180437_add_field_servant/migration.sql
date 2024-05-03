-- AlterTable
ALTER TABLE "dev_registrations" ADD COLUMN     "servant" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "servant" BOOLEAN NOT NULL DEFAULT false;
