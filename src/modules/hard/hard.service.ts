import { Injectable } from '@nestjs/common';
import { CreateHardDto } from './dto/create-hard.dto';
import { UpdateHardDto } from './dto/update-hard.dto';

@Injectable()
export class HardService {
  create(createHardDto: CreateHardDto) {
    return 'This action adds a new hard';
  }

  findAll() {
    return `This action returns all hard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hard`;
  }

  update(id: number, updateHardDto: UpdateHardDto) {
    return `This action updates a #${id} hard`;
  }

  remove(id: number) {
    return `This action removes a #${id} hard`;
  }
}
