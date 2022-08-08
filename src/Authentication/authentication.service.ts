import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../Users/users.schema';
import { UsersService } from '../Users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(private userModel: UsersService) { }
    
    async validateUser(username: string, password: string) : Promise<any> {
        const findUser = await this.userModel.findOne({ username: username })

        if (findUser && findUser.password === password) {
            const { password, username, ...rest } = findUser;
            return rest
        }

        return null
    }
}
