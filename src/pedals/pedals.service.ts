import { Injectable } from '@nestjs/common';

@Injectable()
export class PedalsService {
  create(createPedalDto: null) {
    return 'This action adds a new pedal';
  }

  findAll() {
    return `This action returns all pedals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedal`;
  }

  update(id: number, updatePedalDto: null) {
    return `This action updates a #${id} pedal`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedal`;
  }
}
