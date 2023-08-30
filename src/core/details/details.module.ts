import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Detail } from './entities/detail.entity';

// Modules
import { WeightClassesModule } from '../weight-classes/weight-classes.module';

// Services
import { DetailsService } from './details.service';

// Controllers
import { DetailsController } from './details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Detail]), WeightClassesModule],
  exports: [TypeOrmModule, DetailsService],
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class DetailsModule {}
