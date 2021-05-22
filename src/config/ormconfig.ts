import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CategoryEntity } from "src/category/category.entity";
import { CategoryPostJunctionEntity } from "src/CategoryPostJunction/category-post.entity";
import { PostEntity } from "src/post/post.entity";
import { UserEntity } from "src/user/user.entity";

export const ormconfig: TypeOrmModuleOptions = {
    type: "postgres",
    database: "queries",
    username: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    entities: [UserEntity, PostEntity, CategoryEntity, CategoryPostJunctionEntity],
    synchronize: true
}