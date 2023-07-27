import { Module } from '@nestjs/common';
import { PassportUsersService } from './passport-users.service';

@Module({
  providers: [PassportUsersService],
  exports: [PassportUsersService],
})
export class PassportUsersModule {}
