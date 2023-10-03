/*
  Warnings:

  - A unique constraint covering the columns `[senha]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Paciente_senha_key" ON "Paciente"("senha");
