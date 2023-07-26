import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalLogger } from './middleware/global.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalLogger); // for every route this will run
  await app.listen(3000);
}
bootstrap();
