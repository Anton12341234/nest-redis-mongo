import { FactoryProvider } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisClient, REDIS_CLIENT } from './redis-client.type';


export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
  provide: REDIS_CLIENT,
  
  useFactory: async () => {

    const client = createClient({ url: 'redis://127.0.0.1:6379' })
    await client.connect();

    for(let i=0; i<10; i++){
      await client.set(`${i}`, `${Math.random()}`)
    }

    return client;
  },
};