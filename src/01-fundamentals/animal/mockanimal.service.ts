import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class MockAnimalService {
  getHello(): string {
    return 'Hello World! from a mock service class';
  }
}
