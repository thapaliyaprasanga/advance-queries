import { PostEntity } from "src/post/post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn({type: 'int'})
    id: number

    @Column()
    username: string

    @OneToMany(() => PostEntity, (post: PostEntity) => post.user)
    posts: PostEntity[]
}