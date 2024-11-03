import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GuitarsModule } from './guitars/guitars.module';
import { PrismaService } from './prisma/prisma.service';
import { BrandsModule } from './brands/brands.module';
import { PedalsModule } from './pedals/pedals.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GuitarsModule,
    BrandsModule,
    PedalsModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [PrismaService],
})
export class AppModule {}
