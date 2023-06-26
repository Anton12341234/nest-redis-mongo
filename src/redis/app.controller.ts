import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('redis')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getValue() {
    return this.appService.getValue();
  }
}