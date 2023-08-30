import { PartialType } from '@nestjs/mapped-types';

// DTO's
import { CreateFighterDto } from './create-fighter.dto';

export class UpdateFighterDto extends PartialType(CreateFighterDto) {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
