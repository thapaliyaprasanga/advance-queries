import {Repository, EntityRepository} from 'typeorm'
import { AuthUserDto } from './dto/auth-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authUserDto: AuthUserDto): Promise<User>{
        const {username} = authUserDto
        const user = new User()
        user.username = username
        await user.save()
        return user
    }
}