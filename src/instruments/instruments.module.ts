import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsController } from './instruments.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InstrumentsController],
  providers: [InstrumentsService, PrismaService],
})
export class InstrumentsModule {}
