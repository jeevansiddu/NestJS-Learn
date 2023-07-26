// config.service.ts

export abstract class ConfigService {
  abstract getConfigValue(key: string): string;
}
