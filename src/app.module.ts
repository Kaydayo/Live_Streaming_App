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
import { NotificationService } from './notification/notification.service';
import { PaymentService } from './payment/payment.service';
import { NotificationController } from './notification/notification.controller';
import { PaymentController } from './payment/payment.controller';
import { NotificationModule } from './notification/notification.module';
import { PaymentModule } from './payment/payment.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

let URI:string
if (process.env.NODE_ENV === 'production') { 
 URI = process.env.MONGODB_URI_PROD
} else {
   URI = process.env.MONGODB_URI_DEV
}

@Module({
  imports: [UsersModule, AuthenticationModule, OrganizationsModule, CoursesModule, NotificationModule, PaymentModule, MongooseModule.forRoot(URI)],
  controllers: [AuthenticationController, OrganizationsController, CoursesController, NotificationController, PaymentController],
  providers: [AuthenticationService, OrganizationsService, CoursesService, NotificationService, PaymentService],
})
export class AppModule {}
