import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { HumansService } from './humans/humans.service';
import { HumansController } from './humans/humans.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { functionalLogger } from './middleware/functional.middleware';
import { AttachUserMiddleware } from './middleware/attach.user';
import { AnimalModule } from './01-fundamentals/animal/animal.module';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './DB/book/book.module';
// import e from 'express';
// import { env } from 'process';
import { BirdModule } from './bird/bird.module';
import { AuthModule } from './Authentication/auth/auth.module';
import { PassportAuthModule } from './Authentication/passport/passport-auth/passport-auth.module';

@Module({
  imports: [
    CatsModule,
    AnimalModule,
    ConfigModule.forRoot({
      envFilePath: './.development.env',
    }),
    BookModule,
    BirdModule,
    AuthModule,
    PassportAuthModule,
  ],
  controllers: [AppController, HumansController],
  providers: [AppService, HumansService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, functionalLogger, AttachUserMiddleware) // both middleware runs
      .exclude(
        { path: 'humans/jeevan', method: RequestMethod.GET },
        { path: 'humans/harshini', method: RequestMethod.POST },
      )
      // .forRoutes({ path: 'humans*', method: RequestMethod.ALL });
      .forRoutes(HumansController); //prints only for paths in the humans controller

    //here for the paths specified in cats controller only functional Logger runs
    consumer.apply(functionalLogger).forRoutes(CatsController); //
  }
}
