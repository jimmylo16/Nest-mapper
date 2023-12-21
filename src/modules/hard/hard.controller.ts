import { Controller, Post, Query, ValidationPipe } from '@nestjs/common';
import { HardService } from './hard.service';
import { CreateHardDto } from './dto/create-hard.dto';

@Controller('hard')
export class HardController {
  constructor(private readonly hardService: HardService) {}

  @Post()
  create(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    createHardDto: CreateHardDto,
  ) {
    return this.hardService.create(createHardDto);
  }
}
