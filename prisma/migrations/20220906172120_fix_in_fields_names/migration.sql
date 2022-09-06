/*
  Warnings:

  - You are about to drop the column `prode_UsuarioInfo_PartidosId` on the `Usuarios_Por_Grupo` table. All the data in the column will be lost.
  - You are about to drop the `Prode_Usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Prode_Partido_UsuarioInfo_PartidosId` to the `Usuarios_Por_Grupo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Prode_Usuario" DROP CONSTRAINT "Prode_Usuario_info_PartidosId_fkey";

-- DropForeignKey
ALTER TABLE "Prode_Usuario" DROP CONSTRAINT "Prode_Usuario_userId_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios_Por_Grupo" DROP CONSTRAINT "Usuarios_Por_Grupo_prode_UsuarioInfo_PartidosId_fkey";

-- AlterTable
ALTER TABLE "Usuarios_Por_Grupo" DROP COLUMN "prode_UsuarioInfo_PartidosId",
ADD COLUMN     "Prode_Partido_UsuarioInfo_PartidosId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Prode_Usuario";

-- CreateTable
CREATE TABLE "Prode_Partido_Usuario" (
    "info_PartidosId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "Goles_Local" TEXT NOT NULL,
    "Goles_Visitante" TEXT NOT NULL,
    "Ganador" TEXT NOT NULL,
    "Tiempo_Extra" BOOLEAN NOT NULL DEFAULT false,
    "Penales" BOOLEAN NOT NULL DEFAULT false,
    "Puntos" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Prode_Partido_Usuario_pkey" PRIMARY KEY ("userId","info_PartidosId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prode_Partido_Usuario_info_PartidosId_key" ON "Prode_Partido_Usuario"("info_PartidosId");

-- CreateIndex
CREATE UNIQUE INDEX "Prode_Partido_Usuario_userId_key" ON "Prode_Partido_Usuario"("userId");

-- AddForeignKey
ALTER TABLE "Prode_Partido_Usuario" ADD CONSTRAINT "Prode_Partido_Usuario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prode_Partido_Usuario" ADD CONSTRAINT "Prode_Partido_Usuario_info_PartidosId_fkey" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
