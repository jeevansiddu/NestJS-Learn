import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './SignInDto';
import { AuthGuard } from './auth.guard';
import { access } from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    const token = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    // localStorage.setItem('access_token', `Bearer ${token}`);

    return token;
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // console.log(req.headers);

    return req.user;
  }
}
