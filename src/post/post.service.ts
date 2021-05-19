import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";
import { PostRepository } from "./post.repository";

@Injectable()
export class PostService{
    constructor(
        @InjectRepository(PostRepository) private postRepository: PostRepository){}
    createPost(createPostDto: CreatePostDto): Promise<PostEntity>{
        return this.postRepository.createPost(createPostDto)
    }

    async getPost(){
        const post = await this.postRepository.findOne("3")
        return post
    }
}