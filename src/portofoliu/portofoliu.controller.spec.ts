import { Test, TestingModule } from '@nestjs/testing';
import { PortofoliuController } from './portofoliu.controller';
import { PortofoliuService } from './portofoliu.service';

describe('PortofoliuController', () => {
  let controller: PortofoliuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortofoliuController],
      providers: [PortofoliuService],
    }).compile();

    controller = module.get<PortofoliuController>(PortofoliuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
