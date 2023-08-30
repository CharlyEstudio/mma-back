import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, timeout } from 'rxjs';

// Patterns
import { Commander } from 'src/utils/command';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(ResponseInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const timeoutEnv = 120000;
    const http = context.switchToHttp();
    const request = http.getRequest();
    const { url, params, body, method, headers } = request;
    

    this.logger.debug(`[${new Date()}] ${method} ${url}`);

    return next
      .handle()
      .pipe(
        map(
          (data) => Commander.run(method.toLowerCase(), data),
          timeout(timeoutEnv),
        ),
      );
  }
}