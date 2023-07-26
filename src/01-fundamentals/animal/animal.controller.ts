import { Controller, Get, Inject } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { ConfigService } from '@nestjs/config';

@Controller('animal')
export class AnimalController {
  //   constructor(@Inject('Custom Token') private animalService: AnimalService) {} // by default class name is token but after @Inject('Custom Token') the string 'custom token' will be the Custom Token
  constructor(
    // @Inject('AnimalAliasToken') private AliasAnimalService: AnimalService,
    private configService: ConfigService,
  ) {}
  @Get()
  async getHello(): Promise<string> {
    console.log(this.configService.get<string>('DATABASE_USER', 'localhost'));
    console.log(this.configService.get<string>('database.port')); // getting an custom configuration file

    // return this.AliasAnimalService.getHello();
    return 'Hello World! from a controller';
  }
}
