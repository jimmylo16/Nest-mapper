import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IsNonEmptyArray } from 'src/common/decorators/IsNonEmptyArray.decorator';

export class Header {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  value: string;
}

export class Verdict {
  @IsString()
  @ApiProperty()
  status: string;
}
export class Action {
  @IsString()
  @ApiProperty()
  type: string;
  @IsString()
  @ApiProperty()
  topicArn: string;
}

export class Receipt {
  @IsString()
  @ApiProperty()
  timestamp: string;
  @IsNumber()
  @ApiProperty()
  processingTimeMillis: number;
  @IsString({ each: true })
  @ApiProperty()
  recipients: string[];
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Verdict)
  @ApiProperty()
  spamVerdict: Verdict;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Verdict)
  @ApiProperty()
  virusVerdict: Verdict;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Verdict)
  @ApiProperty()
  spfVerdict: Verdict;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Verdict)
  @ApiProperty()
  dkimVerdict: Verdict;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Verdict)
  @ApiProperty()
  dmarcVerdict: Verdict;
  @IsString()
  @ApiProperty()
  dmarcPolicy: string;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Action)
  @ApiProperty()
  action: Action;
}

export class CommonHeaders {
  @IsString()
  @ApiProperty()
  returnPath: string;
  @IsString({ each: true })
  @ApiProperty()
  from: string[];
  @IsString()
  @ApiProperty()
  date: string;
  @IsString({ each: true })
  to: string[];
  @IsString()
  @ApiProperty()
  messageId: string;
  @IsString()
  @ApiProperty()
  subject: string;
}
export class Mail {
  @IsString()
  @ApiProperty()
  timestamp: string;
  @IsString()
  @ApiProperty()
  source: string;
  @IsString()
  @ApiProperty()
  messageId: string;
  @IsString({ each: true })
  @ApiProperty()
  destination: string[];
  @IsBoolean()
  @ApiProperty()
  headersTruncated: boolean;
  @ValidateNested({ each: true })
  @IsNonEmptyArray()
  @Type(() => Header)
  @ApiProperty()
  headers: Header[];
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CommonHeaders)
  @ApiProperty()
  commonHeaders: CommonHeaders;
}

export class Ses {
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Receipt)
  @ApiProperty()
  receipt: Receipt;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Mail)
  @ApiProperty()
  mail: Mail;
}

export class RecordDto {
  @IsString()
  @ApiProperty()
  eventVersion: string;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => Ses)
  @ApiProperty()
  ses: Ses;
  @IsString()
  @ApiProperty()
  eventSource: string;
}

export class CreateEasyDto {
  @ValidateNested({ each: true })
  @IsNonEmptyArray()
  @Type(() => RecordDto)
  @ApiProperty({ type: RecordDto, isArray: true })
  Records: RecordDto[];
}
