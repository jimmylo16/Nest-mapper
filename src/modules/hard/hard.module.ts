import { Module } from '@nestjs/common';
import { HardService } from './hard.service';
import { HardController } from './hard.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [HardController],
  providers: [HardService],
})
export class HardModule {}
