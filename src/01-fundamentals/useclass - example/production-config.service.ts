// production-config.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class ProductionConfigService extends ConfigService {
  private readonly config = {
    database: {
      host: 'prod-db-host',
      port: '5432',
    },
    api: {
      baseURL: 'https://api.example.com',
    },
  };

  getConfigValue(key: string): string {
    return this.config[key];
  }
}
