import { PartialType } from '@nestjs/mapped-types';
import { CreatePortofoliuDto } from './create-portofoliu.dto';

export class UpdatePortofoliuDto extends PartialType(CreatePortofoliuDto) {}
