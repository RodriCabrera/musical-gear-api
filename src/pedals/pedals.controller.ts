import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PedalsService } from './pedals.service';

@Controller('pedals')
export class PedalsController {
  constructor(private readonly pedalsService: PedalsService) {}

  @Post()
  create(@Body() createPedalDto: null) {
    return this.pedalsService.create(createPedalDto);
  }

  @Get()
  findAll() {
    return this.pedalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedalDto: null) {
    return this.pedalsService.update(+id, updatePedalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedalsService.remove(+id);
  }
}
