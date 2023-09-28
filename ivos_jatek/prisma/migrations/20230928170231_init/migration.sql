-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "subjectSessionId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubjectSession" (
    "id" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    CONSTRAINT "SubjectSession_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("subjectSessionId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubjectSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("subjectSessionId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ended" BOOLEAN NOT NULL DEFAULT false,
    "subjectSessionId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_id_key" ON "Subject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subjectSessionId_key" ON "Subject"("subjectSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectSession_id_key" ON "SubjectSession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_subjectSessionId_key" ON "Session"("subjectSessionId");
