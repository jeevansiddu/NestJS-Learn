import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local.auth.guard';
import { PassportAuthService } from './passport-auth.service';
import { JwtAuthGuard } from './jwt-auth-guard';

@Controller('passport')
export class PassportAuthController {
  //   @UseGuards(AuthGuard('local')) or call like
  constructor(private passportAuthService: PassportAuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return this.passportAuthService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
