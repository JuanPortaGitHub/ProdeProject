/*
  Warnings:

  - You are about to drop the column `info_PartidosId` on the `Equipos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Equipos" DROP CONSTRAINT "partidoequipolocal_fk";

-- DropForeignKey
ALTER TABLE "Equipos" DROP CONSTRAINT "partidoequipovisitante_fk";

-- DropIndex
DROP INDEX "Equipos_id_key";

-- DropIndex
DROP INDEX "Equipos_info_PartidosId_key";

-- AlterTable
ALTER TABLE "Equipos" DROP COLUMN "info_PartidosId";

-- CreateTable
CREATE TABLE "_EquiposToInfo_Partidos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EquiposToInfo_Partidos_AB_unique" ON "_EquiposToInfo_Partidos"("A", "B");

-- CreateIndex
CREATE INDEX "_EquiposToInfo_Partidos_B_index" ON "_EquiposToInfo_Partidos"("B");

-- AddForeignKey
ALTER TABLE "_EquiposToInfo_Partidos" ADD CONSTRAINT "_EquiposToInfo_Partidos_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquiposToInfo_Partidos" ADD CONSTRAINT "_EquiposToInfo_Partidos_B_fkey" FOREIGN KEY ("B") REFERENCES "Info_Partidos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
