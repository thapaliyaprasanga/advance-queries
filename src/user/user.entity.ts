import { PostEntity } from 'src/post/post.entity'
import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @OneToMany(() => PostEntity, (post: PostEntity) => post.user, {eager: false})
    posts: PostEntity[]
}