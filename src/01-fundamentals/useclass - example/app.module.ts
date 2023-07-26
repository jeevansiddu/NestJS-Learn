// app.module.ts

import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { DevelopmentConfigService } from './development-config.service';
import { ProductionConfigService } from './production-config.service';

const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};

@Module({
  providers: [configServiceProvider],
  exports: [configServiceProvider],
})
export class AppModule {}
