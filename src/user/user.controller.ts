import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('auth')
export class UserController{
    constructor(private userService: UserService){}

    @Post('signup')
    createUser(@Body() newUser: UserDto){
        return this.userService.createUser(newUser)
    }
}