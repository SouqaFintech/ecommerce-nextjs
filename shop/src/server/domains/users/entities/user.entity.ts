import { Address } from '@/server/domains/addresses/entities/address.entity';
import { CoreEntity } from '@/server/domains/common/entities/core.entity';
// import { Order } from 'src/orders/entities/order.entity';
import { Shop } from '@/server/domains/shops/entities/shop.entity';
import { Profile } from './profile.entity';

export class User extends CoreEntity {
  name: string = "";
  email: string = "";
  password?: string;
  profile?: Profile;
  shops?: Shop[];
  managed_shop?: Shop;
  is_active?: boolean = true;
  address?: Address[];
  permissions?: Permission[];
  // orders?: Order[];
  wallet?: any;
}

export class Permission extends CoreEntity {
  name?: string;
  guard_name?: string;
  pivot?: any;
}
