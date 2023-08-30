import { Module } from '@nestjs/common';

// Config
import { ConfigurationKeys } from './config/config.key';

// Modules Config
import { DbModule } from './db/db.module';
import { ConfigModule as ConfigCustomModule } from './config/config.module';

// Services
import { ConfigService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';

// Modules API
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
    }),
    DbModule,
    ConfigCustomModule,
    CoreModule,
  ],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    }
  ],
  exports: [],
})
export class AppModule {
  static micorservicio: number | string;
  static port: string;
  static host: string;

  constructor(
    private readonly _configService: ConfigService
  ) {
    AppModule.port = this._configService.get(ConfigurationKeys.PORT);
    AppModule.host = this._configService.get(ConfigurationKeys.HOST);
  }
}
