import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PortofoliuService } from './portofoliu.service';
import { CreatePortofoliuDto } from './dto/create-portofoliu.dto';
import { UpdatePortofoliuDto } from './dto/update-portofoliu.dto';
import { Portofoliu } from './entities/portofoliu.entity';

@Controller('portofoliu')
export class PortofoliuController {
  constructor(private readonly portofoliuService: PortofoliuService) {}

  @Post()
  create(@Body() portofoliu: Omit<Portofoliu, 'id'>) {
    return this.portofoliuService.create({ ...portofoliu });
  }
  @Get()
  findAll() {
    return this.portofoliuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portofoliuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() portofoliu: Partial<Portofoliu>) {
    return this.portofoliuService.update(+id, portofoliu);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portofoliuService.remove(+id);
  }
}
