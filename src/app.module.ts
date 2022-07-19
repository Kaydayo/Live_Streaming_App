import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [UsersModule, AuthenticationModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AppModule {}
