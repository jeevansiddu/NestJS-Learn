import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { MockAnimalService } from './mockanimal.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

const AliasAnimalService = {
  provide: 'AnimalAliasToken',
  useExisting: AnimalService,
};
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['src/.development.env', 'src/config/.env'],
      load: [configuration],
    }),
  ],
  controllers: [AnimalController],
  //   providers: [
  //     {
  //       provide: AnimalService, //ASSOciating the token catsService in controller
  //       useValue: new MockAnimalService(), //to the mockcatsService class
  //     },
  //   ],
  //   providers: [
  //     {
  //       provide: 'Custom Token', //ASSOciating the custom token string as the token
  //       useValue: new MockAnimalService(), //to the mockcatsService class
  //     },
  //   ],
  //   providers: [AnimalService],
  providers: [AnimalService, AliasAnimalService], //aliasing
})
export class AnimalModule {}
