import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/users.schema';
import { AuthenticationService } from './authentication.service';
import { localStrategy } from './local.strategy';

@Module({
    imports: [PassportModule, UsersModule],
    providers:[AuthenticationService, localStrategy]
})
export class AuthenticationModule {}
