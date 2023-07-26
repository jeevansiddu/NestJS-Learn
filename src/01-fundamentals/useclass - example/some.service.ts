import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class SomeService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseConfig() {
    const dbConfig = this.configService.getConfigValue('database');
    return dbConfig;
  }
}
