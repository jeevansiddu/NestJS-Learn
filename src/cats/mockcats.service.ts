import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class MockCatsService {
  //   private readonly cats: Cat[] = [];

  create(cat: Cat) {
    return `Cats pushed`;
    // this.cats.push(cat);
  }

  findAll(): string {
    return `Cats returned`;
    // return this.cats;
  }
}
