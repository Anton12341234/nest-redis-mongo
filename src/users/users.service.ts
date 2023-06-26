import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User, UserDocument} from './users.schema'
import {Model} from 'mongoose'
import {CreateUserDto} from './dto/create-user.dto'


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
    async getAll(): Promise<User[]> {
        const users = this.userModel.find()
        return users;
    }

    async getOne(id: string): Promise<User> {
        const user = this.userModel.findOne({_id:id})
        return user;
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        return user
    }

    async getUserByUsername(username: string) {
        const user = await this.userModel.findOne({username:username})
        return user;
    }
}
