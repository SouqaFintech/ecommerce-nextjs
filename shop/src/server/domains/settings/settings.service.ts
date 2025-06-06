import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';
import settingsJson from '@/server/db/settings.json';

// const products: Product[] = productsJson as Product[];
const settings: Setting[] = settingsJson as unknown as Setting[];

// @Injectable()
export class SettingsService {
  private settings: Setting[] = settings;

  create(createSettingDto: CreateSettingDto) {
    return this.settings;
  }

  findAll() {
    return this.settings;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return this.settings;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
