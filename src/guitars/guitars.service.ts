import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Guitar, Prisma } from '@prisma/client';
import { CreateGuitarDto } from './dto/create-guitar.dto';

@Injectable()
export class GuitarsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Guitar[]> {
    return await this.prisma.guitar.findMany();
  }

  // NOTE: The Prisma.GuitarCreateInput does not include the brandId field.
  async create(createGuitarDto: CreateGuitarDto): Promise<Guitar> {
    const brandExists = await this.prisma.brand.findUnique({
      where: { id: createGuitarDto.brandId },
    });

    if (!brandExists) {
      throw new BadRequestException(
        `Brand with id ${createGuitarDto.brandId} does not exist`,
      );
    }

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
  }

  remove(id: number) {
    return this.prisma.guitar.delete({
      where: { id },
    });
  }
}
