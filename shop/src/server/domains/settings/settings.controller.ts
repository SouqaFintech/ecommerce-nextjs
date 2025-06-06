import { CreateSettingDto } from './dto/create-setting.dto';
import { SettingsService } from './settings.service';

export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  // @Post()
  create(createSettingDto: CreateSettingDto) {
    return this.settingsService.create(createSettingDto);
  }

  // @Get()
  findAll() {
    return this.settingsService.findAll();
  }
}
