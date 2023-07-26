import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler()); //reflector is used to get the metadata from the handler of all the roles set in the route handler
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest(); // get the request object
    const user = (request as any).user; // converting the request object to any type and then getting the user object from it
    //another way is directly changing the type of request object using the namespace folder in express.d.ts file  and then getting the user object from it
    return user.roles.some((role) => roles.includes(role));
    //get user details from request object
    // return matchRoles(roles, user.roles); // match roles is a function which will match the roles from the request object and the roles set in the route handler
    // return true;
  }
}
