import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// import { CreateCatDto } from 'my-nest-projectsrcdto.ts';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat.dto';

// @Controller({ path: 'cats',host: 'www..localhost.com' }) //
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  setCats(): string {
    return `Sets all the cats`;
  }
  @Get('id')
  getCats(): string {
    return `the number of cats with id`;
  }

  @Get('ab*cd')
  @HttpCode(250)
  routeCards(): string {
    return `endpoint starts with ab and ends with cd`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post('breed')
  create(@Body() createCatDto: CreateCatDto) {
    return `name: ${createCatDto.name} and breed: ${createCatDto.breed} and age is ${createCatDto.age}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
