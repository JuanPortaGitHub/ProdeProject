/*
  Warnings:

  - You are about to drop the column `nombre` on the `Usuarios_Por_Grupo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Usuarios_Por_Grupo_nombre_key";

-- AlterTable
ALTER TABLE "Usuarios_Por_Grupo" DROP COLUMN "nombre";
