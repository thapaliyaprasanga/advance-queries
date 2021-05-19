import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthUserDto } from "./dto/auth-user.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository
        ){}

    createUser(authUserDto: AuthUserDto): Promise<User>{
        return this.userRepository.createUser(authUserDto)
    }
}