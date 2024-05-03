-- CreateTable
CREATE TABLE "servants" (
    "id" SERIAL NOT NULL,
    "habilities" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registrationId" INTEGER NOT NULL,

    CONSTRAINT "servants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servants" ADD CONSTRAINT "servants_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "registrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
