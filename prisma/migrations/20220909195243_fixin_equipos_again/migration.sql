/*
  Warnings:

  - You are about to drop the `_EquiposToInfo_Partidos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EquiposToInfo_Partidos" DROP CONSTRAINT "_EquiposToInfo_Partidos_A_fkey";

-- DropForeignKey
ALTER TABLE "_EquiposToInfo_Partidos" DROP CONSTRAINT "_EquiposToInfo_Partidos_B_fkey";

-- AlterTable
ALTER TABLE "Info_Partidos" ADD COLUMN     "equiposId" INTEGER;

-- DropTable
DROP TABLE "_EquiposToInfo_Partidos";

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "infopartidos_local_fk" FOREIGN KEY ("equiposId") REFERENCES "Equipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "infopartidos_visitante_fk" FOREIGN KEY ("equiposId") REFERENCES "Equipos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
