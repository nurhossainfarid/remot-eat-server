-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'PENDING';

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "order_status" DROP NOT NULL,
ALTER COLUMN "order_status" SET DEFAULT 'PENDING';
