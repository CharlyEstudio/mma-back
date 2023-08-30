import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Fight } from './entities/fight.entity';

// Modules
import { FightersModule } from '../fighters/fighters.module';
import { WeightClassesModule } from '../weight-classes/weight-classes.module';

// Services
import { FightsService } from './fights.service';

// Controllers
import { FightsController } from './fights.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fight]), FightersModule, WeightClassesModule],
  exports: [TypeOrmModule, FightsService],
  controllers: [FightsController],
  providers: [FightsService],
})
export class FightsModule {}
