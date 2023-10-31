-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userPriorities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "categoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "userPriorities_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userPriorities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userPriorities" ("categoryId", "id", "priority", "userId") SELECT "categoryId", "id", "priority", "userId" FROM "userPriorities";
DROP TABLE "userPriorities";
ALTER TABLE "new_userPriorities" RENAME TO "userPriorities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
