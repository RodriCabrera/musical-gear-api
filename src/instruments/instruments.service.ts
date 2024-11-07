import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Instrument, Prisma } from '@prisma/client';

@Injectable()
export class InstrumentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Instrument[]> {
    return await this.prisma.instrument.findMany();
  }

  async create(
    createInstrumentDto: Prisma.InstrumentCreateInput,
  ): Promise<Instrument> {
    return await this.prisma.instrument.create({
      data: createInstrumentDto,
    });
  }

  async findOne(id: number): Promise<Instrument | null> {
    return await this.prisma.instrument.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateInstrumentDto: Prisma.InstrumentUpdateInput) {
    return await this.prisma.instrument.update({
      where: { id },
      data: updateInstrumentDto,
    });
  }

  remove(id: number) {
    return this.prisma.instrument.delete({
      where: { id },
    });
  }
}
