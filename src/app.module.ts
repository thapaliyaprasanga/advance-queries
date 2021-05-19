import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "./category/category.module";
import { ormconfig } from "./config/ormconfig";
import { PostModule } from "./post/post.module";
import { AuthModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        AuthModule,
        PostModule,
        CategoryModule
    ]
})
export class AppModule{}