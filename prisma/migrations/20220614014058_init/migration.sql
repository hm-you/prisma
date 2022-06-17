-- DropIndex
DROP INDEX "Like_postId_idx";

-- CreateIndex
CREATE INDEX "Like_postId_idx" ON "Like" USING HASH ("postId");

-- CreateIndex
CREATE INDEX "Post_id_idx" ON "Post" USING HASH ("id");
