import { PartialType } from '@nestjs/mapped-types';
import { CreateHardDto } from './create-hard.dto';

export class UpdateHardDto extends PartialType(CreateHardDto) {}
