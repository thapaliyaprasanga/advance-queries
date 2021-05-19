import {Body, Controller, Get, Post} from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('/post')
export class PostController{
    constructor(private postService: PostService){}
    @Post('/create')
    async createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity>{
        return this.postService.createPost(createPostDto)
    }

    @Get()
    async getPost(){
        return this.postService.getPost()
    }
}