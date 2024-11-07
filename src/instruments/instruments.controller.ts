import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { Prisma } from '@prisma/client';

@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Post()
  async create(@Body() createInstrumentDto: Prisma.InstrumentCreateInput) {
    return this.instrumentsService.create(createInstrumentDto);
  }

  @Get()
  findAll() {
    return this.instrumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrumentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstrumentDto: Prisma.InstrumentUpdateInput,
  ) {
    return this.instrumentsService.update(+id, updateInstrumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrumentsService.remove(+id);
  }
}
