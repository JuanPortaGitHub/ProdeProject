/*
  Warnings:

  - The primary key for the `Prode_Partido_Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Grupo" ADD COLUMN     "monto" TEXT,
ADD COLUMN     "slogan" TEXT;

-- AlterTable
ALTER TABLE "Prode_Partido_Usuario" DROP CONSTRAINT "Prode_Partido_Usuario_pkey",
ADD COLUMN     "grupoId" INTEGER NOT NULL DEFAULT 0,
ADD CONSTRAINT "Prode_Partido_Usuario_pkey" PRIMARY KEY ("userId", "info_PartidosId", "grupoId");

-- AddForeignKey
ALTER TABLE "Prode_Partido_Usuario" ADD CONSTRAINT "Prode_Partido_Usuario_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
