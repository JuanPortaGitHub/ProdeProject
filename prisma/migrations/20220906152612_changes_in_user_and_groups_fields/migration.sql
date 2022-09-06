/*
  Warnings:

  - The primary key for the `Usuarios_Por_Grupo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Usuarios_Por_Grupo` table. All the data in the column will be lost.
  - You are about to drop the `_GrupoToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Prode_Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_GrupoToUser" DROP CONSTRAINT "_GrupoToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GrupoToUser" DROP CONSTRAINT "_GrupoToUser_B_fkey";

-- AlterTable
ALTER TABLE "Usuarios_Por_Grupo" DROP CONSTRAINT "Usuarios_Por_Grupo_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Usuarios_Por_Grupo_pkey" PRIMARY KEY ("userId", "grupoId");

-- DropTable
DROP TABLE "_GrupoToUser";

-- CreateIndex
CREATE UNIQUE INDEX "Prode_Usuario_userId_key" ON "Prode_Usuario"("userId");
