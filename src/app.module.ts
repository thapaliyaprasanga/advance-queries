import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from "./category/category.module";
import { ormconfig } from "./config/ormconfig";
import { PostModule } from "./post/post.module";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        PostModule,
        UserModule,
        CategoryModule
    ]
})
export class AppModule{}