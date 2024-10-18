import { Module } from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { GuitarsController } from './guitars.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GuitarsController],
  providers: [GuitarsService, PrismaService],
})
export class GuitarsModule {}
