import { Module } from '@nestjs/common';
import { redisClientFactory } from './redis-client.factory';
import { RedisService } from './redis.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    providers: [redisClientFactory, RedisService, AppService],
    controllers: [AppController],
    exports: [RedisService]
  })
  export class RedisModule {}
