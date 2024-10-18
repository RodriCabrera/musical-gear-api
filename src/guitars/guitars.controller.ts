import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { Prisma } from '@prisma/client';

@Controller('guitars')
export class GuitarsController {
  constructor(private readonly guitarsService: GuitarsService) {}

  @Post()
  async create(@Body() createGuitarDto: Prisma.GuitarCreateInput) {
    return this.guitarsService.create(createGuitarDto);
  }

  @Get()
  findAll() {
    return this.guitarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guitarsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGuitarDto: Prisma.GuitarUpdateInput,
  ) {
    console.log(updateGuitarDto); //body llega vacio.
    return this.guitarsService.update(+id, updateGuitarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guitarsService.remove(+id);
  }
}
