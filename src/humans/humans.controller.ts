import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  ParseIntPipe,
  HttpStatus,
  DefaultValuePipe,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { HumansService } from './humans.service';
import { Human } from './interfaces/human.interface';
import { CreateHumanDto } from 'src/dto/create-human.dto';
import { ValidationPipe } from 'src/pipe/class.validator.pipe';
import { RolesGuard } from 'src/Guards/roles.guard';
import { Roles } from 'src/Guards/roles.decorator';
import { CacheInterceptor } from 'src/interceptors/cache.interceptor';
import { User } from 'src/custom-decorators/human.decorator';
import { Auth } from 'src/custom-decorators/decorator.composition';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { ExcludeNullInterceptor } from 'src/interceptors/excludenull.interceptor';

@Controller('humans')
export class HumansController {
  constructor(private humansService: HumansService) {}
  @Get()
  @UseInterceptors(ExcludeNullInterceptor) //dependency injection;
  async getAllHumans(): Promise<Human[]> {
    return this.humansService.findAll();
  }

  @Post()
  @SetMetadata('roles', ['humans'])
  @UseGuards(RolesGuard) //dependency injection
  async addName(@Body(/*new ValidationPipe()*/) humanDto: CreateHumanDto) {
    this.humansService.create(humanDto);
  }

  //example of parseInt pipe if want uncomment it
  @Get(':id')
  // @Roles('humans')
  @Auth('humans ')
  async findOne(
    @Param('id', new DefaultValuePipe(0), ParseIntPipe) id: number,
  ) {
    // return this.catsService.findOne(id);
    // console.log('hello');
    return 'This route is allow only for humans';
  }

  // @Get(':id')
  // async findNameInRequestObject(
  //   @User('fname')
  //   firstName: string,
  // ) {
  //   return `Hello ${firstName}`;
  // }
  //for UUID pipe example
  //   @Get(':uuid')
  //   async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
  //     return this.catsService.findOne(uuid);
  //   }

  // @Get(':id')
  // async findHumanByName(@Param('id') id: string): Promise<Human[]> {
  //   return this.humansService.findByName(id);
  // }

  @Delete(':id')
  async deleteByName(@Param('id') id: string): Promise<string> {
    return this.humansService.deleteByName(id);
  }

  @Put('?')
  async updateByName(
    @Query('name') name: string,
    @Query(
      'age',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), //passing an instance of parseintpipe which is useful to customize the pipe
    )
    age: number,
  ): Promise<void> {
    this.humansService.updateByName(name, age);
    // return `Hello, ${name}! Yorjhjhu are $age)} years old.`;
  }

  @Delete()
  async deleteAll() {
    this.humansService.deleteAll();
  }
}
