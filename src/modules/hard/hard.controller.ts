import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HardService } from './hard.service';
import { CreateHardDto } from './dto/create-hard.dto';
import { UpdateHardDto } from './dto/update-hard.dto';

@Controller('hard')
export class HardController {
  constructor(private readonly hardService: HardService) {}

  @Post()
  create(@Body() createHardDto: CreateHardDto) {
    return this.hardService.create(createHardDto);
  }

  @Get()
  findAll() {
    return this.hardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHardDto: UpdateHardDto) {
    return this.hardService.update(+id, updateHardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hardService.remove(+id);
  }
}
