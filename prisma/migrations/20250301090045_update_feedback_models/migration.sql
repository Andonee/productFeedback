/*
  Warnings:

  - The primary key for the `Upvote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `upvoteId` on the `Upvote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId,feedbackId]` on the table `Upvote` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Upvote` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_pkey",
DROP COLUMN "upvoteId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Upvote_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Upvote_authorId_feedbackId_key" ON "Upvote"("authorId", "feedbackId");
