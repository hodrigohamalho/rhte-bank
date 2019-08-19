import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  let port = process.env.SERVER_PORT || 3000;
  await app.listen(port);
  
}
bootstrap();
