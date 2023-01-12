-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Warning', 'Info', 'Error');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SIMPLE_USER', 'USER_ADMIN');

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "meta" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SIMPLE_USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "photoUrl" TEXT,
    "gamePoint" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itinary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gamePoint" INTEGER,
    "photoUrl" TEXT,

    CONSTRAINT "Itinary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 0,
    "isCanPark" BOOLEAN NOT NULL DEFAULT false,
    "isCanVisit" BOOLEAN NOT NULL DEFAULT false,
    "isTouristic" BOOLEAN NOT NULL DEFAULT false,
    "profileId" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "lng" INTEGER NOT NULL,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItinaryToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ItinaryToSpot" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_text_key" ON "Test"("text");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_pseudo_key" ON "Profile"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ItinaryToProfile_AB_unique" ON "_ItinaryToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_ItinaryToProfile_B_index" ON "_ItinaryToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItinaryToSpot_AB_unique" ON "_ItinaryToSpot"("A", "B");

-- CreateIndex
CREATE INDEX "_ItinaryToSpot_B_index" ON "_ItinaryToSpot"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spot" ADD CONSTRAINT "Spot_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItinaryToProfile" ADD CONSTRAINT "_ItinaryToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Itinary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItinaryToProfile" ADD CONSTRAINT "_ItinaryToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItinaryToSpot" ADD CONSTRAINT "_ItinaryToSpot_A_fkey" FOREIGN KEY ("A") REFERENCES "Itinary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItinaryToSpot" ADD CONSTRAINT "_ItinaryToSpot_B_fkey" FOREIGN KEY ("B") REFERENCES "Spot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
