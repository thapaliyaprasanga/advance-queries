import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "./category/category.module";
import { ormconfig } from "./config/ormconfig";
import { PostModule } from "./post/post.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        PostModule,
        CategoryModule
    ]
})
export class AppModule{}