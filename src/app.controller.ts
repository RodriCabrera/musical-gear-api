import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// A controller's purpose is to receive specific requests for the application.
// The routing mechanism controls which controller receives which requests.
// Frequently, each controller has more than one route, and different routes can perform different actions.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
