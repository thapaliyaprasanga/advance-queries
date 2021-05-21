import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){}

    async createUser(newUser: UserDto){
        const {username} = newUser
        const user = new UserEntity()
        user.username = username
        await user.save()
        return user
    }
}