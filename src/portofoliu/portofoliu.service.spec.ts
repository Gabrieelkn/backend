import { Test, TestingModule } from '@nestjs/testing';
import { PortofoliuService } from './portofoliu.service';

describe('PortofoliuService', () => {
  let service: PortofoliuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortofoliuService],
    }).compile();

    service = module.get<PortofoliuService>(PortofoliuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
