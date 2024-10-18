import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Brand, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.brand.findMany();
  }
  async create(createBrandDto: Prisma.BrandCreateInput): Promise<Brand> {
    return await this.prisma.brand.create({
      data: createBrandDto,
    });
  }
}
