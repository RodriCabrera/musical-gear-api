-- DropForeignKey
ALTER TABLE "Guitar" DROP CONSTRAINT "Guitar_brandId_fkey";

-- AddForeignKey
ALTER TABLE "Guitar" ADD CONSTRAINT "Guitar_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
