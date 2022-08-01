import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Organization, OrganizationDocument} from "./organizations.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(Organization.name) private userModel: Model<OrganizationDocument>) {

    }

    async findOne(userFilterQuery: FilterQuery<Organization>): Promise<Organization> {
        return await this.userModel.findOne(userFilterQuery).exec();
    }

    async find(userFilterQuery: FilterQuery<Organization>): Promise<Organization[]> {
        return await this.userModel.find(userFilterQuery).exec();
    }

    async create(user: Organization): Promise<Organization> {
        return await this.userModel.create(user);
    }

    async update(userFilterQuery: FilterQuery<Organization>, organization: Organization): Promise<Organization> {
        return await this.userModel.findOneAndUpdate(userFilterQuery, organization, { new: true }).exec();
    }
}