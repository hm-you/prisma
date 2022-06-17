-- DropIndex
DROP INDEX "Like_postId_idx";

-- CreateIndex
CREATE INDEX "Like_postId_idx" ON "Like"("postId");
