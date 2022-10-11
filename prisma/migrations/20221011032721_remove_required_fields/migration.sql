-- AlterTable
ALTER TABLE "Resultados_Reales_Partidos" ALTER COLUMN "Goles_Local" DROP NOT NULL,
ALTER COLUMN "Goles_Visitante" DROP NOT NULL,
ALTER COLUMN "Ganador" DROP NOT NULL;
