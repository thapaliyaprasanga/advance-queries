import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";

@Injectable()
export class PostService{
    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>){}
    async createPost(user: UserEntity, createPostDto: CreatePostDto, category1, category2){
        const {body} = createPostDto
        const post = new PostEntity()
        post.body = body
        post.user = user
        post.categoryPosts = [category1, category2]
        await post.save()
        return post
    }
}