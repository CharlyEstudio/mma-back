import { Module } from '@nestjs/common';

// API - Modules
import { StatisticsModule } from './statistics/statistics.module';
import { FightersModule } from './fighters/fighters.module';
import { WeightClassesModule } from './weight-classes/weight-classes.module';
import { DetailsModule } from './details/details.module';

@Module({
  imports: [StatisticsModule, FightersModule, WeightClassesModule, DetailsModule]
})
export class CoreModule {}
