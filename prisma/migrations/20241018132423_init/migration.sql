-- CreateTable
CREATE TABLE "Guitar" (
    "id" SERIAL NOT NULL,
    "model" TEXT,
    "brand" TEXT,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Guitar_pkey" PRIMARY KEY ("id")
);
