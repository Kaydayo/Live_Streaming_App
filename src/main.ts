import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express';

let logger = new Logger()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT, () => {
    logger.log(`Application is running on port ${process.env.PORT}`)


  });

}
bootstrap();
