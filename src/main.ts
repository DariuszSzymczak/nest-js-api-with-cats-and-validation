import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     logger: new MyLogger(),
//   });
//   await app.listen(3000);
// }