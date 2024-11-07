import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GuitarsModule } from './guitars/guitars.module';
import { PrismaService } from './prisma/prisma.service';
import { BrandsModule } from './brands/brands.module';
import { PedalsModule } from './pedals/pedals.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    GuitarsModule,
    BrandsModule,
    PedalsModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [PrismaService],
})
export class AppModule {}
