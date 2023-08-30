import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import {config} from 'dotenv';

@Injectable()
export class ConfigService {
  private logger: Logger = new Logger('Configuración Global');

  constructor() {
    if (!('MICROSERVICIO' in process.env)) {
      const envFilePath = __dirname + '/../../.env';
      const existPath = fs.existsSync(envFilePath);

      if (!existPath) {
        this.logger.error(`El archivo .env no existe en el path: ${envFilePath}`);
        process.exit(0);
      }

      this.logger.log("Cargando configs desde archivo");
      config({path: envFilePath});

    } else {
      process.env
    }
  }

  get(key: string) {
    return process.env[key];
  }
}
