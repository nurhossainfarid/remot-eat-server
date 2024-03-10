/*
  Warnings:

  - The `status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `FoodItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodPackage` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'PENDING', 'BLOCKED');

-- DropForeignKey
ALTER TABLE "FoodItems" DROP CONSTRAINT "FoodItems_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "FoodPackage" DROP CONSTRAINT "FoodPackage_shop_id_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "payment_status" DROP NOT NULL,
ALTER COLUMN "picked" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Shop" ALTER COLUMN "open_time" DROP NOT NULL,
ALTER COLUMN "close_time" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "status",
ADD COLUMN     "status" "AccountStatus" NOT NULL DEFAULT 'ACTIVE';

-- DropTable
DROP TABLE "FoodItems";

-- DropTable
DROP TABLE "FoodPackage";

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "shop_id" INTEGER NOT NULL,
    "food_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "food_image" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" SERIAL NOT NULL,
    "shop_id" INTEGER NOT NULL,
    "food_name" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "food_image" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "rating" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foods" ADD CONSTRAINT "Foods_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
