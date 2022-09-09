/*
  Warnings:

  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OwnerToVehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OwnerToVehicle" DROP CONSTRAINT "_OwnerToVehicle_A_fkey";

-- DropForeignKey
ALTER TABLE "_OwnerToVehicle" DROP CONSTRAINT "_OwnerToVehicle_B_fkey";

-- DropTable
DROP TABLE "Owner";

-- DropTable
DROP TABLE "Vehicle";

-- DropTable
DROP TABLE "_OwnerToVehicle";
