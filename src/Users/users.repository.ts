import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./users.schema";

@Injectable()
export class UsersRepository{
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument> ) {
        
    }

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User>{
        return await this.userModel.findOne(userFilterQuery).exec();
    }

    async find(userFilterQuery: FilterQuery<User>): Promise<User[]>{
        return await this.userModel.find(userFilterQuery).exec();
    }

    async create(user: User): Promise<User> { 
        return await this.userModel.create(user);
    }

    async update(userFilterQuery: FilterQuery<User>, user: User): Promise<User> {
        return await this.userModel.findOneAndUpdate(userFilterQuery, user, { new: true }).exec();
    }
}