import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ThrottlerGuard } from '@nestjs/throttler';
import { FormDto } from './form.dto';

@Controller()
@UseGuards(ThrottlerGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  check() {
    return 'Good!';
  }

  @Post()
  async saveForm(@Body() form: FormDto) {
    await this.appService.crateIssue(form);
    return {
      success: true,
    };
  }
}
