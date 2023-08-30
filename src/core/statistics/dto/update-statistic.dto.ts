import { PartialType } from '@nestjs/mapped-types';

// DTO's
import { CreateStatisticDto } from './create-statistic.dto';

export class UpdateStatisticDto extends PartialType(CreateStatisticDto) {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
