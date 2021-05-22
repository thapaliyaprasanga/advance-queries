import { CategoryPostJunctionEntity } from "src/CategoryPostJunction/category-post.entity";
import { UserEntity } from "src/user/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'posts'})
export class PostEntity extends BaseEntity{
    @PrimaryGeneratedColumn({type: 'int'})
    id: number

    @Column({type: "text"})
    body: string

    @ManyToOne(() => UserEntity, (user: UserEntity) => user.posts)
    user: UserEntity

    @OneToMany(() => CategoryPostJunctionEntity, (categoryPost: CategoryPostJunctionEntity) => categoryPost.post, {cascade: ['insert']})
    categoryPosts: CategoryPostJunctionEntity[]
}
