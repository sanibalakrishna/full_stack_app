import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins (for development)
  app.enableCors();

  app.setGlobalPrefix('api');

  await app.listen(3002);
}
bootstrap();
