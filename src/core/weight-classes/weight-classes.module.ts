import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { WeightClass } from './entities/weight-class.entity';

// Services
import { WeightClassesService } from './weight-classes.service';

// Controllers
import { WeightClassesController } from './weight-classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WeightClass])],
  exports: [TypeOrmModule, WeightClassesService],
  controllers: [WeightClassesController],
  providers: [WeightClassesService],
})
export class WeightClassesModule {}
