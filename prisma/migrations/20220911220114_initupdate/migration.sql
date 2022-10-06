-- DropForeignKey
ALTER TABLE "Info_Partidos" DROP CONSTRAINT "Info_Partidos_resultados_Reales_PartidosId_fkey";

-- AlterTable
ALTER TABLE "Info_Partidos" ALTER COLUMN "resultados_Reales_PartidosId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "Info_Partidos_resultados_Reales_PartidosId_fkey" FOREIGN KEY ("resultados_Reales_PartidosId") REFERENCES "Resultados_Reales_Partidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
