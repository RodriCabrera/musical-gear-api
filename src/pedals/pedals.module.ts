import { Module } from '@nestjs/common';
import { PedalsService } from './pedals.service';
import { PedalsController } from './pedals.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PedalsController],
  providers: [PedalsService, PrismaService],
})
export class PedalsModule {}
