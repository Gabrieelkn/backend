import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortofoliuModule } from './portofoliu/portofoliu.module';

@Module({
  imports: [PortofoliuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
