/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellido` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "mail" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "imagen" TEXT,
    "clave_grupo" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios_Por_Grupo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "prode_UsuarioInfo_PartidosId" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_Por_Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prode_Usuario" (
    "Goles_Local" TEXT NOT NULL,
    "Goles_Visitante" TEXT NOT NULL,
    "Ganador" TEXT NOT NULL,
    "Tiempo_Extra" BOOLEAN NOT NULL DEFAULT false,
    "Penales" BOOLEAN NOT NULL DEFAULT false,
    "Puntos" INTEGER NOT NULL,
    "info_PartidosId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Prode_Usuario_pkey" PRIMARY KEY ("info_PartidosId")
);

-- CreateTable
CREATE TABLE "Info_Partidos" (
    "id" SERIAL NOT NULL,
    "DiaHora" TIMESTAMP(3) NOT NULL,
    "Lugar" TEXT NOT NULL,
    "resultados_Reales_PartidosId" INTEGER NOT NULL,

    CONSTRAINT "Info_Partidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipos" (
    "id" SERIAL NOT NULL,
    "nombre_equipo" TEXT NOT NULL,
    "info_PartidosId" INTEGER,

    CONSTRAINT "Equipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultados_Reales_Partidos" (
    "id" SERIAL NOT NULL,
    "Goles_Local" TEXT NOT NULL,
    "Goles_Visitante" TEXT NOT NULL,

    CONSTRAINT "Resultados_Reales_Partidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GrupoToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nombre_key" ON "Grupo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Por_Grupo_nombre_key" ON "Usuarios_Por_Grupo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Info_Partidos_resultados_Reales_PartidosId_key" ON "Info_Partidos"("resultados_Reales_PartidosId");

-- CreateIndex
CREATE UNIQUE INDEX "_GrupoToUser_AB_unique" ON "_GrupoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GrupoToUser_B_index" ON "_GrupoToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- AddForeignKey
ALTER TABLE "Usuarios_Por_Grupo" ADD CONSTRAINT "Usuarios_Por_Grupo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Por_Grupo" ADD CONSTRAINT "Usuarios_Por_Grupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Por_Grupo" ADD CONSTRAINT "Usuarios_Por_Grupo_prode_UsuarioInfo_PartidosId_fkey" FOREIGN KEY ("prode_UsuarioInfo_PartidosId") REFERENCES "Prode_Usuario"("info_PartidosId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prode_Usuario" ADD CONSTRAINT "Prode_Usuario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prode_Usuario" ADD CONSTRAINT "Prode_Usuario_info_PartidosId_fkey" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Info_Partidos" ADD CONSTRAINT "Info_Partidos_resultados_Reales_PartidosId_fkey" FOREIGN KEY ("resultados_Reales_PartidosId") REFERENCES "Resultados_Reales_Partidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipos" ADD CONSTRAINT "Equipos_info_PartidosId_fkey" FOREIGN KEY ("info_PartidosId") REFERENCES "Info_Partidos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
