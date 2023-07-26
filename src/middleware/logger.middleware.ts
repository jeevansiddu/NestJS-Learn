import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HumansService } from 'src/humans/humans.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly humansService: HumansService) {} //dependency injection also possible
  use(req: Request, res: Response, next: NextFunction) {
    //now we can call like
    console.log(this.humansService.findAll());
    console.log('Request...');
    console.log(
      `[${new Date().toISOString()}] Request received: ${req.method} ${
        req.originalUrl
      }`,
    );
    next();
  }
}
