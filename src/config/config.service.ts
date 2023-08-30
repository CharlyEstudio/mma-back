import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor() {
    process.env;
  }

  get(key: string) {
    return process.env[key];
  }
}
