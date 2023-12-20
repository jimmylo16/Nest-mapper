import { Injectable } from '@nestjs/common';
import { CreateEasyDto } from './dto/create-easy.dto';

@Injectable()
export class EasyService {
  create(createEasyDto: CreateEasyDto) {
    return 'This action adds a new easy';
  }
}
