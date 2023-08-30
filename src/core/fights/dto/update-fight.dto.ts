import { PartialType } from '@nestjs/mapped-types';

// DTO's
import { CreateFightDto } from './create-fight.dto';

export class UpdateFightDto extends PartialType(CreateFightDto) {}
