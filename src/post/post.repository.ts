import { EntityRepository, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity>{
    async createPost(createPostDto: CreatePostDto): Promise<PostEntity>{
        const {body} = createPostDto
        const post = new PostEntity()
        post.body = body
        // post.user = user
        await post.save()
        return post
    }
}