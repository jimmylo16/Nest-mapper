import { Module } from '@nestjs/common';
import { HardService } from './hard.service';
import { HardController } from './hard.controller';

@Module({
  controllers: [HardController],
  providers: [HardService],
})
export class HardModule {}
