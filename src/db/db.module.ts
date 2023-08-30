import { Module } from '@nestjs/common';
import { dbService } from './db.service';

@Module({
  imports: [...dbService],
  exports: [...dbService],
})
export class DbModule {}
