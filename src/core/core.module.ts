import { Module } from '@nestjs/common';

// API
import { StatisticsModule } from './statistics/statistics.module';
import { FightersModule } from './fighters/fighters.module';

@Module({
  imports: [StatisticsModule, FightersModule]
})
export class CoreModule {}
