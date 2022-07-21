import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ROLES } from 'src/utils/enums';

export type UserDocument = User & Document;

@Schema({ timestamps: true  })
export class User {
    @Prop({required: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({type:[String], default:[ROLES.USER], enum:ROLES})
    role: string[];

    @Prop({required: true})
    phoneNumber: string;

    @Prop()
    address: string;

    @Prop({default: false})
    isAdmin: boolean;

    @Prop({default:false})
    isActive: boolean;

    @Prop({default: false})
    isDeleted: boolean;

    @Prop({default: false})
    isLicense: boolean;

    @Prop({default: false})
    organization: string;

    @Prop()
    licenseExpiryDate: Date;
    
  
}

export const UserSchema = SchemaFactory.createForClass(User);



