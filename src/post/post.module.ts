import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import {TypeOrmModule} from '@nestjs/typeorm'
import { PostRepository } from "./post.repository";
import { UserRepository } from "src/user/user.repository";

@Module({
    imports: [TypeOrmModule.forFeature([PostRepository])],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule{}