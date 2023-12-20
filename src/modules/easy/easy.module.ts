import { Module } from '@nestjs/common';
import { EasyService } from './easy.service';
import { EasyController } from './easy.controller';

@Module({
  controllers: [EasyController],
  providers: [EasyService],
})
export class EasyModule {}
