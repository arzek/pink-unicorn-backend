import { Injectable } from '@nestjs/common';
import { Youtrack } from 'youtrack-rest-client';
import { ConfigService } from '@nestjs/config';
import { FormDto } from './form.dto';

@Injectable()
export class AppService {
  private youtrack: Youtrack;

  constructor(private readonly configService: ConfigService) {
    this.youtrack = new Youtrack({
      baseUrl: this.configService.get('URL'),
      token: this.configService.get('TOKEN'),
    });
  }

  async crateIssue(form: FormDto): Promise<void> {
    await this.youtrack.issues.create({
      project: {
        id: this.configService.get('PROJECT'),
      },
      summary: `${form.firstName} ${form.lastName} | ${form.country}`,
      description: `
        First name: ${form.firstName}
        Last name: ${form.lastName}
        Email: ${form.email}
        Phone: ${form.phone}
        Phone: ${form.phone}
        Country: ${form.country}
        City: ${form.city}
        Desired position: ${form.desiredPosition}
        Skills: ${form.desiredPosition}
        Experience: ${form.experience}
        English: ${form.english}
        Salary: ${form.salary}
        Communication channel: ${form.communicationChannel}
        LinkedIn: ${form.linkedIn}
        Skype: ${form.skype}
        Telegram: ${form.telegram}
        WhatsApp: ${form.whatsApp}
        CV: ${form.cv}
        Comment: ${form.comment}     
      `,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
