import { Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "src/category/category.entity";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller('post')
export class PostController{
    constructor(private postService: PostService, 
        @InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>){}
    @Post('create')
    async createPost(@Body() createPostDto: CreatePostDto){
        const user = await this.userEntity.findOne({username: 'john'})
        const category1 = await this.categoryRepository.findOne({label: 'Javascript'})
        const category2 = await this.categoryRepository.findOne({label: 'React'})
        return this.postService.createPost(user,createPostDto,category1,category2)
    }
}