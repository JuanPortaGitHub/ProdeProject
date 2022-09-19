/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Grupo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nombre_key" ON "Grupo"("nombre");
