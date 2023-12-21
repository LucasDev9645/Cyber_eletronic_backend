/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `product_id` on the `items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_product_id_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
