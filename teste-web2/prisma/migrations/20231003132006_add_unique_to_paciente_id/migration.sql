/*
  Warnings:

  - A unique constraint covering the columns `[pacienteId]` on the table `Consulta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Consulta_pacienteId_key" ON "Consulta"("pacienteId");
