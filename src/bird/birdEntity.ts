import { Exclude } from 'class-transformer';

export class BirdEntity {
  id: number;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<BirdEntity>) {
    Object.assign(this, partial);
  }
}
