import { Request, Response, NextFunction } from 'express';

export function functionalLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`Request from a functional middleware...`);
  //these types are used when there is no dependency
  next();
}
