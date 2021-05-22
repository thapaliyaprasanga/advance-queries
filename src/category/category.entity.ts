import { CategoryPostJunctionEntity } from "src/CategoryPostJunction/category-post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category'})
export class CategoryEntity extends BaseEntity{
    @PrimaryGeneratedColumn({type: 'int'})
    id: number

    @Column()
    label: string

    @OneToMany(() => CategoryPostJunctionEntity, categoryPost => categoryPost.category, {cascade: ['insert']})
    categoryPosts: CategoryPostJunctionEntity[]
}