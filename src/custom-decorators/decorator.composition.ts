import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { RolesGuard } from 'src/Guards/roles.guard';

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(RolesGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
function ApiBearerAuth(): ClassDecorator | MethodDecorator | PropertyDecorator {
  throw new Error('Function not implemented.');
}

function ApiUnauthorizedResponse(arg0: {
  description: string;
}): ClassDecorator | MethodDecorator | PropertyDecorator {
  throw new Error('Function not implemented.');
}
