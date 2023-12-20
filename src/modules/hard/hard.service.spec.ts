import { Test, TestingModule } from '@nestjs/testing';
import { HardService } from './hard.service';

describe('HardService', () => {
  let service: HardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardService],
    }).compile();

    service = module.get<HardService>(HardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
