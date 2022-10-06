/*
  Warnings:

  - Added the required column `Grupo` to the `Info_Partidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RondaTorneo` to the `Info_Partidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTorneo` to the `Info_Partidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Info_Partidos" ADD COLUMN     "Grupo" TEXT NOT NULL,
ADD COLUMN     "RondaTorneo" TEXT NOT NULL,
ADD COLUMN     "idTorneo" INTEGER NOT NULL;
