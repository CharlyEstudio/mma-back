import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as fs from 'fs';
import {config} from 'dotenv';

const envFilePath = __dirname + '/../../.env';
const existPath = fs.existsSync(envFilePath);
if (!existPath) {
  console.log("Path not exist");
}

config({path: envFilePath});

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(`${process.env.DATABASE_PORT || 3306}`),
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'default',
  database: process.env.DATABASE_NAME || 'default',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/db/migrations/*.ts'],
  subscribers: [],
});