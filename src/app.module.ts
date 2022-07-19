import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrganizationsService } from './organizations/organizations.service';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [UsersModule, AuthenticationModule, OrganizationsModule],
  controllers: [AuthenticationController, OrganizationsController],
  providers: [AuthenticationService, OrganizationsService],
})
export class AppModule {}
