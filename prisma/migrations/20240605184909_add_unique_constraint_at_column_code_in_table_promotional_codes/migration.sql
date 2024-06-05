/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `promotional_codes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "promotional_codes_code_key" ON "promotional_codes"("code");
