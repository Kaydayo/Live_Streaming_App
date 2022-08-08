import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../Users/users.module';
import { UserSchema } from '../Users/users.schema';
import { AuthenticationService } from './authentication.service';
import { localStrategy } from './local.strategy';

@Module({
    imports: [PassportModule, UsersModule],
    providers:[AuthenticationService, localStrategy]
})
export class AuthenticationModule {}
