import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsCopyController } from './cats2.controller';
import { MockCatsService } from './mockcats.service';

// const MockCatsService = {
//   create(cat) {
//     return `Cats pushed`;
//     // this.cats.push(cat);
//   },

//   findAll(): string {
//     return `Cats returned`;
//     // return this.cats;
//   },
// };
@Module({
  controllers: [CatsController, CatsCopyController],
  providers: [
    {
      provide: CatsService, //ASSOciating the token catsService in controller
      useValue: new MockCatsService(), //to the mockcatsService class
    },
  ],
})
export class CatsModule {}
