import {Body, Controller, Post} from '@nestjs/common'
import { AuthUserDto } from './dto/auth-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('auth')
export class UserController{
    constructor(private userService: UserService){}
    @Post('signup')
    createUser(@Body() authUserDto: AuthUserDto): Promise<User>{
        return this.userService.createUser(authUserDto)
    }
}