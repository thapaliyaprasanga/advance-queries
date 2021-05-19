import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoryService{
    constructor(@InjectRepository(Category) private categoryRepository: CategoryRepository){}
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>{
        return this.categoryRepository.createCategory(createCategoryDto)
    }
}