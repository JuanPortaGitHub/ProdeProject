/*
  Warnings:

  - Added the required column `Ganador` to the `Resultados_Reales_Partidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resultados_Reales_Partidos" ADD COLUMN     "Ganador" TEXT NOT NULL,
ADD COLUMN     "Penales" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "Tiempo_Extra" BOOLEAN NOT NULL DEFAULT false;
