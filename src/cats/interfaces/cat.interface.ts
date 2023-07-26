import { Exclude } from 'class-transformer';
import * as Joi from 'joi';

export const createCatSchema = Joi.object({
  name: Joi.string().required(), // This is a Joi schema. It is a contract that defines the properties and their types that an object must have.
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export interface Cat {
  // This is an interface. It is a contract that defines the properties and their types that an object must have.
  name: string;
  age: number;

  breed: string;
}
