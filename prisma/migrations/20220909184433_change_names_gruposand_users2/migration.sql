/*
  Warnings:

  - You are about to drop the `Usuarios_Por_Grupo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Usuarios_Por_Grupo" DROP CONSTRAINT "Usuarios_Por_Grupo_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios_Por_Grupo" DROP CONSTRAINT "Usuarios_Por_Grupo_userId_fkey";

-- DropTable
DROP TABLE "Usuarios_Por_Grupo";

-- CreateTable
CREATE TABLE "_GrupoToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GrupoToUser_AB_unique" ON "_GrupoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GrupoToUser_B_index" ON "_GrupoToUser"("B");

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUser" ADD CONSTRAINT "_GrupoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
