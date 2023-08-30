import { Module } from '@nestjs/common';

// API
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [StatisticsModule]
})
export class CoreModule {}
