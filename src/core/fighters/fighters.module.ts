import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Fighter } from './entities/fighter.entity';

// Modules
import { StatisticsModule } from '../statistics/statistics.module';

// Services
import { FightersService } from './fighters.service';

// Controllers
import { FightersController } from './fighters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter]), StatisticsModule],
  exports: [TypeOrmModule, FightersService],
  controllers: [FightersController],
  providers: [FightersService],
})
export class FightersModule {}
