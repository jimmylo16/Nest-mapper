import { ApiProperty } from '@nestjs/swagger';

export class Response {
  @ApiProperty()
  spam: boolean;
  @ApiProperty()
  virus: boolean;
  @ApiProperty()
  dns: boolean;
  @ApiProperty()
  mes: string;
  @ApiProperty()
  retrasado: boolean;
  @ApiProperty()
  emisor: string;
  @ApiProperty()
  receptor: string[];
}
