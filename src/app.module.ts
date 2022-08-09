import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { AuthenticationService } from './Authentication/authentication.service';
import { AuthenticationController } from './Authentication/authentication.controller';
import { AuthenticationModule } from './Authentication/authentication.module';
import { OrganizationsService } from './Organizations/organizations.service';
import { OrganizationsController } from './Organizations/organizations.controller';
import { OrganizationsModule } from './Organizations/organizations.module';
import { CoursesService } from './Courses/courses.service';
import { CoursesController } from './Courses/courses.controller';
import { CoursesModule } from './Courses/courses.module';
import { NotificationService } from './Notification/notification.service';
import { PaymentService } from './Payment/payment.service';
import { NotificationController } from './Notification/notification.controller';
import { PaymentController } from './Payment/payment.controller';
import { NotificationModule } from './Notification/notification.module';
import { PaymentModule } from './Payment/payment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionsController } from './Subscriptions/subscriptions.controller';
import { SubscriptionsModule } from './Subscriptions/subscriptions.module';
require('dotenv').config();

let URI:string
if (process.env.NODE_ENV === 'production') { 
 URI = process.env.MONGODB_URI_PROD
} else {
   URI = process.env.MONGODB_URI_DEV
}

console.log(URI)
@Module({
  imports: [UsersModule, AuthenticationModule, OrganizationsModule, CoursesModule, NotificationModule, PaymentModule, MongooseModule.forRoot(URI), SubscriptionsModule],
  controllers: [AuthenticationController, OrganizationsController, CoursesController, NotificationController, PaymentController, SubscriptionsController],
  providers: [AuthenticationService, OrganizationsService, CoursesService, NotificationService, PaymentService],
})
export class AppModule {}
