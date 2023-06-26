import { Injectable } from "@nestjs/common";
import { RedisService } from "./redis.service";

@Injectable()
export class AppService {

  constructor(
    private readonly redisService: RedisService,
  ) {}

  getValue() {
    return this.redisService.getValue();
  }

}