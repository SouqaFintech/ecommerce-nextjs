import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { Product } from './entities/product.entity';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';

export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  createProduct(createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @Get()
  async getProducts(query: GetProductsDto): Promise<ProductPaginator> {
    return this.productsService.getProducts(query);
  }

  // @Get(':slug')
  async getProductBySlug(slug: string): Promise<Product> {
    return this.productsService.getProductBySlug(slug);
  }

  // @Put(':id')
  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  // @Delete(':id')
  remove(id: string) {
    return this.productsService.remove(+id);
  }
}

// @Controller('popular-products')
export class PopularProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // @Get()
  async getProducts(query: GetPopularProductsDto): Promise<Product[]> {
    return this.productsService.getPopularProducts(query);
  }
}

// @Controller('best-selling-products')
export class BestSellingProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // @Get()
  async getProducts(query: GetBestSellingProductsDto): Promise<Product[]> {
    return this.productsService.getBestSellingProducts(query);
  }
}

// @Controller('draft-products')
export class DraftProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // @Get()
  async getProducts(query: GetProductsDto): Promise<ProductPaginator> {
    return this.productsService.getDraftProducts(query);
  }
}

// @Controller('products-stock')
export class ProductsStockController {
  constructor(private readonly productsService: ProductsService) {}
  // @Get()
  async getProducts(query: GetProductsDto): Promise<ProductPaginator> {
    return this.productsService.getProductsStock(query);
  }
}
