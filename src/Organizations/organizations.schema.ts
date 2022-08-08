import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, isValidObjectId, Mongoose, Schema as MongooseSchema, Types } from 'mongoose'
import { ORGANIZATION_EMPLOYEE_COUNT, ROLES } from '../utils/enums'

export type OrganizationDocument = Organization & Document;

@Schema({ timestamps: true })
export class Organization{
    @Prop()
    organizationName: string;

    @Prop({ type: ORGANIZATION_EMPLOYEE_COUNT, required: true })
    employeeCount: string;

    @Prop()
    organizationMission: string;

    @Prop()
    organizationVision: string;

    @Prop()
    organizationValues: string;

    @Prop()
    subscriptionDetails: string[];


}