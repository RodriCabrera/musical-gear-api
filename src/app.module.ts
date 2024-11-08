import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BandsModule } from './bands/bands.module';
import { BrandsModule } from './brands/brands.module';
import configuration from './config/configuration';
import { InstrumentsModule } from './instruments/instruments.module';
import { PedalsModule } from './pedals/pedals.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    InstrumentsModule,
    BrandsModule,
    PedalsModule,
    AuthModule,
    BandsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
