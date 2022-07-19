import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrganizationsService } from './organizations/organizations.service';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsModule } from './organizations/organizations.module';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UsersModule, AuthenticationModule, OrganizationsModule, CoursesModule],
  controllers: [AuthenticationController, OrganizationsController, CoursesController],
  providers: [AuthenticationService, OrganizationsService, CoursesService],
})
export class AppModule {}
