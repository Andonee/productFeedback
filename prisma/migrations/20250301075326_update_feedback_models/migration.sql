-- CreateTable
CREATE TABLE "Upvote" (
    "upvoteId" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "feedbackId" INTEGER NOT NULL,

    CONSTRAINT "Upvote_pkey" PRIMARY KEY ("upvoteId")
);

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("feedbackId") ON DELETE RESTRICT ON UPDATE CASCADE;
