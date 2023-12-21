import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateHardDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  file?: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  url?: string;
}
