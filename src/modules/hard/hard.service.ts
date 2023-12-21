import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as parser from 'mailparser';
import * as fs from 'fs';
import { CreateHardDto } from './dto/create-hard.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
@Injectable()
export class HardService {
  private readonly logger = new Logger(HardService.name);
  constructor(private readonly httpService: HttpService) {}
  async create(createHardDto: CreateHardDto) {
    const { file, url } = createHardDto;
    if (url && !file) {
      return await this.getRequest(url);
    }

    if (!url && !file) {
      return new BadRequestException(
        'You need to specify a url or a file to read',
      );
    }
    return this.findAttatchmentOnFile(file, url);
  }

  private async findAttatchmentOnFile(file: string, url: string) {
    const email = fs.createReadStream(`${file}`);
    let fileReadErrorFlag = false;
    email.on('error', () => {
      fileReadErrorFlag = true;
    });
    if (fileReadErrorFlag) {
      return 'Error reading the file, the file is in the root of the project or in the defined file path?';
    }
    const parsedEmail = await parser.simpleParser(email);
    const attachment = parsedEmail.attachments[0];
    if (attachment) {
      const data = attachment.content;
      const jsonString = Buffer.from(data).toString('utf-8');
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    }
    const html = parsedEmail.textAsHtml;
    const link = this.findLinkInResponse(html);

    if (link) {
      const data = await this.getRequest(link);
      if (typeof data === 'string') {
        if (url) {
          let searchLink = url;
          if (link.split('.com')[0] === url.split('.com')[0]) {
            //same domain
            searchLink = url.split('/').pop();
          }
          const isFoundTheLink = this.findLinkInResponse(data, searchLink);
          if (isFoundTheLink) {
            return this.getRequest(url);
          }
          return 'The search url is not in the url inside the body of the email';
        }
        return 'The response is not a json, Please provide a url to search in the url Provided';
      }
      return data;
    }
    return 'No link found in the email';
  }

  private async getRequest(url: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response);
          throw `An error happened reading ${url}!`;
        }),
      ),
    );
    return data;
  }

  private findLinkInResponse(html: string, file?: string): string | null {
    if (!file) {
      const match = html.match(/<a.*?href="(.*?)".*?>/);
      return match ? match[1] : null;
    }
    const regex = new RegExp(`<a.*?href="(.*?${file})".*?>`);
    const match = html.match(regex);

    return match ? match[1] : null;
  }
}
