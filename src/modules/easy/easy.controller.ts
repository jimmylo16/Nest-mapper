import { Controller, Post, Body } from '@nestjs/common';
import { EasyService } from './easy.service';
import { CreateEasyDto } from './dto/create-easy.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Response } from './interface/response.interface';

@Controller('easy')
export class EasyController {
  constructor(private readonly easyService: EasyService) {}

  @Post()
  @ApiOkResponse({ status: 201, description: 'Test', type: Response })
  mapSESEvent(@Body() createEasyDto: CreateEasyDto) {
    return this.easyService.mapSESEvent(createEasyDto);
  }
}
