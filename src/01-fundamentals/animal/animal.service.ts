import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {
  getHello(): string {
    return 'Hello World! from a normal service class';
  }
}
