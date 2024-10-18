/*
  Warnings:

  - You are about to drop the column `brand` on the `Guitar` table. All the data in the column will be lost.
  - Added the required column `brandId` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Made the column `model` on table `Guitar` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Guitar" DROP COLUMN "brand",
ADD COLUMN     "brandId" INTEGER NOT NULL,
ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Guitar" ADD CONSTRAINT "Guitar_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
