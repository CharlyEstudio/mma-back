import { PartialType } from '@nestjs/mapped-types';

// DTO's
import { CreateWeightClassDto } from './create-weight-class.dto';

export class UpdateWeightClassDto extends PartialType(CreateWeightClassDto) {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
