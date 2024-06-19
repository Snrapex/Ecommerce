-- CreateTable
CREATE TABLE "user" (
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
