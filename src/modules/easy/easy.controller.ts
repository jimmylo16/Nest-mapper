import { Controller, Post, Body } from '@nestjs/common';
import { EasyService } from './easy.service';
import { CreateEasyDto } from './dto/create-easy.dto';

@Controller('easy')
export class EasyController {
  constructor(private readonly easyService: EasyService) {}

  @Post()
  create(@Body() createEasyDto: CreateEasyDto) {
    return this.easyService.create(createEasyDto);
  }
}
