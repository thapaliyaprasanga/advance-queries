import { Category } from "src/category/category.entity";
import { PostEntity } from "src/post/post.entity";
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category_post'})
export class CategoryPost extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => PostEntity, post => post.categoriesPosts)
    @JoinColumn({name: 'post_id'})
    post: PostEntity

    @ManyToOne(() => Category, category => category.categoriesPosts)
    @JoinColumn({name: 'category_id'})
    category: Category
}