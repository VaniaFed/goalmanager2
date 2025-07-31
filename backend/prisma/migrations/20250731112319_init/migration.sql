-- CreateTable
CREATE TABLE "public"."Goal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "current" INTEGER DEFAULT 0,
    "total" INTEGER NOT NULL,
    "goalId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Goal_title_key" ON "public"."Goal"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Task_title_key" ON "public"."Task"("title");

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
