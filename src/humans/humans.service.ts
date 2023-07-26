import { Injectable } from '@nestjs/common';
import { Human } from './interfaces/human.interface';

@Injectable()
export class HumansService {
  private humans: Human[] = [];
  create(human: Human): void {
    this.humans.push(human);
  }
  findAll(): Human[] {
    return this.humans;
  }
  findByName(name: string): Human[] {
    return this.humans.filter((human) => {
      return human.name == name;
    });
  }
  deleteByName(name: string): string {
    this.humans = this.humans.filter((human) => {
      return human.name !== name;
    });
    return 'Deleted';
  }
  updateByName(name: string, age: number): void {
    this.humans.forEach((human) => {
      if (human.name === name) {
        human.age = age;
      }
      //   return human;
    });
  }
  deleteAll(): void {
    this.humans.length = 0;
  }
}
