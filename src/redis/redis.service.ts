import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';

@Injectable()
export class RedisService implements OnModuleDestroy {
  public constructor(
    @Inject(REDIS_CLIENT) private readonly redis: RedisClient,
  ) {}

  onModuleDestroy() {
    this.redis.quit();
  }

  async getValue() {
    
    let keys=[]
    for(let i=0; i<10; i++){
      keys.push(`${i}`)
    }

    const value = await this.redis.mGet(keys)

    await this.redis.flushDb()
    await this.redis.disconnect();
    return value
  }
}
