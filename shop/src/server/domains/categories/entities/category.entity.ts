import { Attachment } from '@/server/domains/common/entities/attachment.entity';
import { CoreEntity } from '@/server/domains/common/entities/core.entity';
import { Product } from '@/server/domains/products/entities/product.entity';
import { Type } from '@/server/domains/types/entities/type.entity';

export class Category implements CoreEntity {
  id: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
  name: string = '';
  slug: string = '';
  parent?: Category;
  children?: Category[];
  details?: string;
  image?: Attachment;
  icon?: string;
  type?: Type;
  products?: Product[];
  language: string = '';
  translated_languages: string[] = [];
}
