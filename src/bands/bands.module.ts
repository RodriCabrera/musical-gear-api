import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BandsController],
  providers: [BandsService, PrismaService],
})
export class BandsModule {}
