/*
  Warnings:

  - You are about to drop the `message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "message";

-- CreateTable
CREATE TABLE "chat" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "chatUser_id" TEXT NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_chatUser_id_fkey" FOREIGN KEY ("chatUser_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
