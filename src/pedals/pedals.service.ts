import { Injectable } from '@nestjs/common';
import { Pedal, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedalsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Pedal[]> {
    return await this.prisma.pedal.findMany();
  }

  async findOne(id: number): Promise<Pedal | null> {
    return await this.prisma.pedal.findUniqueOrThrow({ where: { id } });
  }

  async create(createPedalDto: Prisma.PedalCreateInput) {
    return await this.prisma.pedal.create({
      data: createPedalDto,
    });
  }

  async update(id: number, updatePedalDto: Prisma.PedalUpdateInput) {
    return await this.prisma.pedal.update({
      where: { id },
      data: updatePedalDto,
    });
  }

  remove(id: number) {
    return this.prisma.pedal.delete({
      where: { id },
    });
  }
}
