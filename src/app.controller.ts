import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHostname(): string {
    return this.appService.getHostname();
  }

  @Get("loop")
  getLoop(): string {
    return this.appService.getLoop();
  }
}
