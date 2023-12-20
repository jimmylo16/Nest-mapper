import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EasyModule } from './modules/easy/easy.module';
import { HardModule } from './modules/hard/hard.module';

@Module({
  imports: [EasyModule, HardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
