import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryPostJunctionEntity } from "./category-post.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryPostJunctionEntity])]
})
export class CategoryPostModule{}