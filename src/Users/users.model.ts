import * as mongoose from 'mongoose';

export interface IUser {
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    address: string,
    isAdmin: boolean,
    isActive: boolean,
    isDeleted: boolean,
    islicensed: boolean,
    licenseExpiryDate: Date,



}

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    },
    islicensed: {
        type: Boolean,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    },
    licenseExpiryDate: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'superadmin'],
        default: 'user'
    }
        

})

const User = mongoose.model<IUser>('User', UserSchema);