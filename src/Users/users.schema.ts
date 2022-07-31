import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Schema as MongooseSchema, Types } from 'mongoose';
import { ROLES } from 'src/utils/enums';

export type UserDocument = User & Document;

@Schema({ timestamps: true  })
export class User {
    @Prop()
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true, unique:true})
    email: string;

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({type:[String], default:[ROLES.USER], enum:ROLES})
    role: string[];

    @Prop({required: true, unique:true})
    phoneNumber: string;

    @Prop({default: false})
    isAdmin: boolean;

    @Prop({default:false})
    isActive: boolean;

    @Prop({default: false})
    isDeleted: boolean;

    @Prop({default: false})
    isLicense: boolean;

    @Prop( {type: MongooseSchema.Types.ObjectId, ref: 'Organizations'})
    organization: Types.ObjectId;

    @Prop()
    licenseExpiryDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);



