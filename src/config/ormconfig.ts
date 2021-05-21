import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";

export const ormconfig: TypeOrmModuleOptions = {
    type: "postgres",
    database: "queries",
    username: "postgres",
    password: "9682",
    host: "localhost",
    port: 5432,
    entities: [UserEntity],
    synchronize: true
}