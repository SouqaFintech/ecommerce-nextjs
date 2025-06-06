import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoriesDto } from './dto/get-categories.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

// @Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // @Post()
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  // @Get()
  findAll(query: GetCategoriesDto) {
    return this.categoriesService.getCategories(query);
  }

  // @Get(':param')
  findOne(param: string, language: string) {
    return this.categoriesService.getCategory(param, language);
  }

  // @Put(':id')
  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  // @Delete(':id')
  remove(id: string) {
    return this.categoriesService.remove(+id);
  }
}
