import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Guitar, Prisma } from '@prisma/client';

@Injectable()
export class GuitarsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Guitar[]> {
    return await this.prisma.guitar.findMany();
  }

  async create(createGuitarDto: Prisma.GuitarCreateInput): Promise<Guitar> {
    return await this.prisma.guitar.create({
      data: createGuitarDto,
    });
  }

  async findOne(id: number) {
    return await this.prisma.guitar.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateGuitarDto: Prisma.GuitarUpdateInput) {
    return await this.prisma.guitar.update({
      where: { id },
      data: updateGuitarDto,
    });
    //  `This action updates a #${id} guitar`;
  }

  remove(id: number) {
    return this.prisma.guitar.delete({
      where: { id },
    });
    //  `This action removes a #${id} guitar`;
  }
}
