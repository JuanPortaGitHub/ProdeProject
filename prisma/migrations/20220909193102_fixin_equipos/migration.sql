/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Equipos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info_PartidosId]` on the table `Equipos` will be added. If there are existing duplicate values, this will fail.
  - Made the column `info_PartidosId` on table `Equipos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Equipos" DROP CONSTRAINT "Equipos_info_PartidosId_fkey";

-- AlterTable
ALTER TABLE "Equipos" ALTER COLUMN "info_PartidosId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Equipos_id_key" ON "Equipos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Equipos_info_PartidosId_key" ON "Equipos"("info_PartidosId");

-- AddForeignKey
ALTER TABLE "Equipos" ADD CONSTRAINT "partidoequipolocal_fk" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipos" ADD CONSTRAINT "partidoequipovisitante_fk" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
