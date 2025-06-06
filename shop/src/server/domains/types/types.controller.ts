import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { GetTypesDto } from './dto/get-types.dto';

export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  // @Post()
  create(createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  // @Get()
  findAll(query: GetTypesDto) {
    return this.typesService.getTypes(query);
  }

  // @Get(':slug')
  getTypeBySlug(slug: string) {
    return this.typesService.getTypeBySlug(slug);
  }

  // @Put(':id')
  update(id: string, updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  // @Delete(':id')
  remove(id: string) {
    return this.typesService.remove(+id);
  }
}
