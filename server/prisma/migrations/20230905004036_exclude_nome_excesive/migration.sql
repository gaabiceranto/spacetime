/*
  Warnings:

  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "githubId" INTEGER NOT NULL,
    "Login" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL
);
INSERT INTO "new_User" ("Login", "avatarUrl", "githubId", "id", "name") SELECT "Login", "avatarUrl", "githubId", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
