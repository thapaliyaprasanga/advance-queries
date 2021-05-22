import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "src/category/category.entity";
import { UserEntity } from "src/user/user.entity";
import { PostController } from "./post.controller";
import { PostEntity } from "./post.entity";
import { PostService } from "./post.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, PostEntity, CategoryEntity])],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule{}