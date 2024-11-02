import { Module } from '@nestjs/common';
import { PedalsService } from './pedals.service';
import { PedalsController } from './pedals.controller';

@Module({
  controllers: [PedalsController],
  providers: [PedalsService],
})
export class PedalsModule {}
