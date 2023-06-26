import { Controller, Get, Param } from '@nestjs/common';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService ){}

    @Get()
    getAll() {
        return this.userService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.userService.getOne(id)
    }

}
