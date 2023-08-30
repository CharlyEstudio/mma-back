import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

// Modules
import { ConfigModule } from 'src/config/config.module';

// Services
import { ConfigService } from 'src/config/config.service';
import { ConfigurationKeys } from 'src/config/config.key';

export const dbService = [
  TypeOrmModule.forRootAsync({
    imports: [
      ConfigModule,
    ],
    inject: [
      ConfigService,
    ],
    async useFactory(config: ConfigService) {
      return {
        timezone: 'Z',
        trace: true,
        logging: true,
        ssl: false,
        type: 'mysql',
        host: config.get(ConfigurationKeys.DATABASE_HOST),
        port: Number(config.get(ConfigurationKeys.DATABASE_PORT)),
        username: config.get(ConfigurationKeys.DATABASE_USER),
        password: config.get(ConfigurationKeys.DATABASE_PASSWORD),
        database: config.get(ConfigurationKeys.DATABASE_NAME),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: false,
        keepConnectionAlive: false,
      } as ConnectionOptions;
    },
  }),
];
