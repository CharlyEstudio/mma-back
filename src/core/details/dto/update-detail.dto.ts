import { PartialType } from '@nestjs/mapped-types';

// DTO's
import { CreateDetailDto } from './create-detail.dto';

export class UpdateDetailDto extends PartialType(CreateDetailDto) {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
