-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userPriorities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "categoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "userPriorities_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userPriorities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_userPriorities" ("categoryId", "id", "priority", "userId") SELECT "categoryId", "id", "priority", "userId" FROM "userPriorities";
DROP TABLE "userPriorities";
ALTER TABLE "new_userPriorities" RENAME TO "userPriorities";
CREATE TABLE "new_spendings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tableId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "spendings_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "spendings_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_spendings" ("categoryId", "createdAt", "date", "description", "id", "name", "tableId", "updatedAt") SELECT "categoryId", "createdAt", "date", "description", "id", "name", "tableId", "updatedAt" FROM "spendings";
DROP TABLE "spendings";
ALTER TABLE "new_spendings" RENAME TO "spendings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
