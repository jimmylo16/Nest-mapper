import { IsOptional, IsString } from 'class-validator';

export class CreateHardDto {
  @IsString()
  @IsOptional()
  file?: string;
  @IsString()
  @IsOptional()
  url?: string;
}
