import { Module } from '@nestjs/common';
import { PassportAuthService } from './passport-auth.service';
import { PassportUsersModule } from '../passport-users/passport-users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PassportAuthController } from './passport-auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportUsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [PassportAuthService, LocalStrategy, JwtStrategy],
  controllers: [PassportAuthController],
})
export class PassportAuthModule {}
