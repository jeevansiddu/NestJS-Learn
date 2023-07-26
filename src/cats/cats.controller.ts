import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UsePipes,
  UseFilters,
  ForbiddenException,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from '..//./dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat, createCatSchema } from './interfaces/cat.interface';
import { JoiValidationPipe } from 'src/pipe/validation.pipe';
import { CustomHttpExceptionFilter } from 'src/exception/exception.filter';
import { ExcludeNullInterceptor } from 'src/interceptors/excludenull.interceptor';

@Controller('dogs')
export class CatsController {
  constructor(private catsService: CatsService) {} // dependency injection

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema)) //using a custom pipe
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @UseInterceptors(ExcludeNullInterceptor)
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

  @Get(':id')
  @UseFilters(new CustomHttpExceptionFilter())
  async throwException() {
    throw new ForbiddenException();
  }
}
