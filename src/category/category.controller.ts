import { Body, Controller, Post } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller('/category')
export class CategoryController{
    constructor(private categoryService: CategoryService){}
    
    @Post('/create')
    createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category>{
        return this.categoryService.createCategory(createCategoryDto)
    }
}