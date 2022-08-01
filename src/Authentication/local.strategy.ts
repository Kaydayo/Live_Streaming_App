import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthenticationService) {
        super()
    }

    async validate(userame: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(userame, password)
        
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}