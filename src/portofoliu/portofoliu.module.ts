import { Module } from '@nestjs/common';
import { PortofoliuService } from './portofoliu.service';
import { PortofoliuController } from './portofoliu.controller';

@Module({
  controllers: [PortofoliuController],
  providers: [PortofoliuService],
})
export class PortofoliuModule {}
