/*
  Warnings:

  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CommentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `Content` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `Category` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Feedback` table. All the data in the column will be lost.
  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `LikeId` on the `Like` table. All the data in the column will be lost.
  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "CommentId",
DROP COLUMN "Content",
DROP COLUMN "CreatedAt",
ADD COLUMN     "commentId" SERIAL NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentId");

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "Category",
DROP COLUMN "CreatedAt",
DROP COLUMN "Description",
DROP COLUMN "Title",
DROP COLUMN "UpdatedAt",
ADD COLUMN     "category" INTEGER[],
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Like" DROP CONSTRAINT "Like_pkey",
DROP COLUMN "LikeId",
ADD COLUMN     "likeId" SERIAL NOT NULL,
ADD CONSTRAINT "Like_pkey" PRIMARY KEY ("likeId");
