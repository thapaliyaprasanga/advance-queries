import { CategoryEntity } from "src/category/category.entity";
import { PostEntity } from "src/post/post.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category_post'})
export class CategoryPostJunctionEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    // @Column({type: 'text'})
    // someColumn: string

    @ManyToOne(() => PostEntity, (post: PostEntity) => post.categoryPosts)
    @JoinColumn({name: 'post_id'})
    post: PostEntity

    @ManyToOne(() => CategoryEntity, (category: CategoryEntity) => category.categoryPosts)
    @JoinColumn({name: 'category_id'})
    category: CategoryEntity
}