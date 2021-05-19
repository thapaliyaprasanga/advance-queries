import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>{
        const {label} = createCategoryDto
        const category = new Category()
        category.label = label
        await category.save()
        return category
    }
}