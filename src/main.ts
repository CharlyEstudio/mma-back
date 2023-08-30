import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

// Interceptors
import { CatchsInterceptor } from './config/pipes/catchs';
import { ResponseInterceptor } from './config/pipes/response';

// Logger
const logger: Logger = new Logger('MMA BackEnd');

// Modules
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    {
      cors: true,
      logger: ['debug', 'error', 'fatal', 'warn']
    }
  );

  // Interceptors
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new CatchsInterceptor());

  await app.listen(AppModule.port, AppModule.host);
  logger.debug(`Service run in ${AppModule.host}:${AppModule.port}`);
}
bootstrap();
