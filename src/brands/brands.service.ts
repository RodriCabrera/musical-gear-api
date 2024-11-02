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
    try {
      return await this.prisma.brand.create({
        data: createBrandDto,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpException('Already exists', HttpStatus.CONFLICT);
        }
      }
    }
  }
}
