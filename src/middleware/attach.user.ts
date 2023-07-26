import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AttachUserMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    // Simulate user authentication and attach a hardcoded user object to the request
    const user = {
      id: 1,
      fname: 'john_doe',
      roles: ['humans'],
    };
    (req as any).user = user; // Attach the user object to the request
    next(); // Call the next middleware or route handler
  }
}
