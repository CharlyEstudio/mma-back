// DTO's
import { UpdateWeightClassDto } from "src/core/weight-classes/dto/update-weight-class.dto";

export class CreateDetailDto {
  nationality: string;
  team: string;
  age: number;
  weightClass: UpdateWeightClassDto;
}
