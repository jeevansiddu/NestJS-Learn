// development-config.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class DevelopmentConfigService extends ConfigService {
  private readonly config = {
    database: {
      host: 'localhost',
      port: '5432',
    },
    api: {
      baseURL: 'http://localhost:3000',
    },
  };

  getConfigValue(key: string): string {
    return this.config[key];
  }
}
