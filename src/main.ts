import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

// Logger
const logger: Logger = new Logger('MMA BackEnd');

// Modules
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    {
      cors: true,
      logger: ['error', 'fatal', 'warn']
    }
  );

  logger.log(`Service run in ${AppModule.host}:${AppModule.port}`);
  await app.listen(AppModule.port, AppModule.host);
}
bootstrap();
