import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { UsersRepository } from './users.repository';
import { User } from './users.schema';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) { }
    
    async findOne(options: FilterQuery<User> ): Promise<User>{
        return this.usersRepository.findOne(options)
    }


}
