import { Module } from '@nestjs/common';

// API - Modules
import { StatisticsModule } from './statistics/statistics.module';
import { FightersModule } from './fighters/fighters.module';
import { WeightClassesModule } from './weight-classes/weight-classes.module';

@Module({
  imports: [StatisticsModule, FightersModule, WeightClassesModule]
})
export class CoreModule {}
