/*
  Warnings:

  - You are about to drop the column `equiposId` on the `Info_Partidos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Info_Partidos" DROP CONSTRAINT "infopartidos_local_fk";

-- DropForeignKey
ALTER TABLE "Info_Partidos" DROP CONSTRAINT "infopartidos_visitante_fk";

-- AlterTable
ALTER TABLE "Info_Partidos" DROP COLUMN "equiposId",
ADD COLUMN     "equipoLocalId" INTEGER,
ADD COLUMN     "equipoVisitanteId" INTEGER;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "infopartidos_local_fk" FOREIGN KEY ("equipoLocalId") REFERENCES "Equipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "infopartidos_visitante_fk" FOREIGN KEY ("equipoVisitanteId") REFERENCES "Equipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
