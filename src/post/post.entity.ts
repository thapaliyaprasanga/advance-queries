import { CategoryPost } from "src/categoryAndPost/category-post.entity";
import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'post'})
export class PostEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    body: string

    @ManyToOne(() => User, (user: User) => user.posts, {eager: true})
    @JoinColumn({name: 'user_id'})
    user: User

    @OneToMany(() => CategoryPost, categoriesPosts => categoriesPosts.post)
    categoriesPosts: CategoryPost[]
}