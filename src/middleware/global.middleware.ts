import { Request, Response, NextFunction } from 'express';

export function globalLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request from a GLOBAL middleware...`);
  //these types are used when there is no dependency
  next();
}
