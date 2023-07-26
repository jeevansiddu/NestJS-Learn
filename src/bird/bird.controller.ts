import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { BirdService } from './bird.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { BirdEntity } from './birdEntity';

@Controller('bird')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findOne(): BirdEntity {
    return new BirdEntity({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec',
      password: 'password',
    });
  }
}
