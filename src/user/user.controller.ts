import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {Prisma, User as UserModel} from '@prisma/client';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private usersService: UsersService) {}

    @Post()
    async signUpUser(
        @Body() userData: Prisma.UserCreateInput
    ): Promise<UserModel>{
        return this.usersService.createUser(userData);
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<UserModel | null> {
        return this.usersService.user({ id: Number(id) });
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userData: Prisma.UserUpdateInput
    ): Promise<UserModel> {
        return this.usersService.updateUser({
            where: { id: Number(id) },
            data: userData,
        });
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<UserModel> {
        return this.usersService.deleteUser({ id: Number(id) });
    }
}
