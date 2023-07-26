import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from '..//./dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('dogs2')
export class CatsCopyController {
  //both the CatsController and the CatsCopyController share the same instance of the catsService
  //so they can be reused
  constructor(private catsService: CatsService) {} // dependency injection
  @Get()
  async findAll(): Promise<Cat[]> {
    try {
      return await this.catsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
