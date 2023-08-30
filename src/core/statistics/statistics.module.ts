import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Statistic } from './entities/statistic.entity';

// Services
import { StatisticsService } from './statistics.service';

// Controllers
import { StatisticsController } from './statistics.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Statistic])],
  exports: [TypeOrmModule, StatisticsService],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
