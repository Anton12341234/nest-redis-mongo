import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UsersModule} from './users/users.module'
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    UsersModule, 
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://anton:0932304567@cluster0.j8curid.mongodb.net/?retryWrites=true'),
    RedisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}