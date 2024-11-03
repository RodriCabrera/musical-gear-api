import { Injectable } from '@nestjs/common';
import { Brand, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.brand.findMany();
  }

  async findOne(id: number): Promise<Brand> {
    return this.prisma.brand.findUnique({
      where: { id },
    });
  }

  async create(createBrandDto: Prisma.BrandCreateInput): Promise<Brand> {
    return this.prisma.brand.create({
      data: createBrandDto,
    });
  }

  async remove(id: number): Promise<Brand> {
    return this.prisma.brand.delete({
      where: { id },
    });
  }

  async update(id: number, updateBrandDto: Prisma.BrandUpdateInput) {
    return this.prisma.brand.update({
      where: { id },
      data: updateBrandDto,
    });
  }
}
