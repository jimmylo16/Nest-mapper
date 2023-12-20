import { Injectable } from '@nestjs/common';
import { CreateEasyDto } from './dto/create-easy.dto';
import { DELAYED_TIME } from 'src/common/constants/constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const objectMapper = require('object-mapper');
@Injectable()
export class EasyService {
  private removeDomainFromEmail(value: string) {
    if (value.includes('@')) {
      return value.split('@')[0];
    }
    return value;
  }
  private removeDomainFromEmails = (value: string[]) => {
    const emails = value.map((email) => {
      return this.removeDomainFromEmail(email);
    });
    return emails;
  };

  private isDelayed(value: number) {
    if (value > DELAYED_TIME) {
      return true;
    }
    return false;
  }

  private getMonthFromTimeStamp(value: string) {
    const date = new Date(value);
    return date.toLocaleString('default', { month: 'long' });
  }

  private spanVeredict(value: string) {
    if (value === 'PASS') {
      return true;
    }
    return false;
  }
  private virusVerdic(value: string) {
    if (value === 'PASS') {
      return true;
    }
    return false;
  }
  private dnsVeredict(value: string) {
    if (value === 'PASS') {
      return true;
    }
    return false;
  }
  create(createEasyDto: CreateEasyDto) {
    const map = {
      'Records[0].ses.receipt.spamVerdict.status': {
        key: 'spam',
        transform: this.spanVeredict,
      },
      'Records[0].ses.receipt.virusVerdict.status': {
        key: 'virus',
        transform: this.virusVerdic,
      },
      'Records[0].ses.receipt.spfVerdict.status': {
        key: 'dns',
        transform: this.dnsVeredict,
      },
      'Records[0].ses.receipt.dkimVerdict.status': {
        key: 'dns',
        transform: this.dnsVeredict,
      },
      'Records[0].ses.receipt.dmarcVerdict.status': {
        key: 'dns',
        transform: this.dnsVeredict,
      },
      'Records[0].ses.mail.timestamp': {
        key: 'mes',
        transform: this.getMonthFromTimeStamp,
      },
      'Records[0].ses.receipt.processingTimeMillis': {
        key: 'retrasado',
        transform: this.isDelayed,
      },
      'Records[0].ses.mail.source': {
        key: 'emisor',
        transform: this.removeDomainFromEmail,
      },
      'Records[0].ses.mail.destination': {
        key: 'receptor',
        transform: this.removeDomainFromEmails,
      },
    };
    const mappedObject = objectMapper(createEasyDto, map);
    return mappedObject;
  }
}
