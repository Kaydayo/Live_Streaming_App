import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('/ret')
    async createUser() {
        return 'valhalla'
    }
}
