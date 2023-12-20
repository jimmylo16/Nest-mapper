import { Test, TestingModule } from '@nestjs/testing';
import { HardController } from './hard.controller';
import { HardService } from './hard.service';

describe('HardController', () => {
  let controller: HardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HardController],
      providers: [HardService],
    }).compile();

    controller = module.get<HardController>(HardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
