import { CategoryPost } from "src/categoryAndPost/category-post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    label: string

    @OneToMany(() => CategoryPost, categoriesPosts => categoriesPosts.category)
    categoriesPosts: CategoryPost[]
    
}