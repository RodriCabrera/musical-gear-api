import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GuitarsModule } from './guitars/guitars.module';
import { PrismaService } from './prisma/prisma.service';
import { BrandsModule } from './brands/brands.module';
import { PedalsModule } from './pedals/pedals.module';

@Module({
  imports: [ConfigModule.forRoot(), GuitarsModule, BrandsModule, PedalsModule],
  providers: [PrismaService],
})
export class AppModule {}
