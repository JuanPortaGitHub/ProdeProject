/*
  Warnings:

  - You are about to drop the `_GrupoToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GrupoToUser" DROP CONSTRAINT "_GrupoToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_GrupoToUser" DROP CONSTRAINT "_GrupoToUser_B_fkey";

-- DropIndex
DROP INDEX "Grupo_nombre_key";

-- DropIndex
DROP INDEX "User_mail_key";

-- DropTable
DROP TABLE "_GrupoToUser";

-- CreateTable
CREATE TABLE "Usuarios_Por_Grupo" (
    "userId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Usuarios_Por_Grupo_pkey" PRIMARY KEY ("userId","grupoId")
);

-- AddForeignKey
ALTER TABLE "Usuarios_Por_Grupo" ADD CONSTRAINT "Usuarios_Por_Grupo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Por_Grupo" ADD CONSTRAINT "Usuarios_Por_Grupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
