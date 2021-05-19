import * as config from 'config'
import { Category } from 'src/category/category.entity'
import { CategoryPost } from 'src/categoryAndPost/category-post.entity'
import { PostEntity } from 'src/post/post.entity'
import { User } from 'src/user/user.entity'
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'
const db = config.get('db')

export const ormconfig: SqliteConnectionOptions = {
    type: db.type,
    database: db.database,
    entities: [User, PostEntity, Category, CategoryPost],
    synchronize: db.synchronize,   
}