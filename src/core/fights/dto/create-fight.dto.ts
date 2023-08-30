// DTO's
import { UpdateFighterDto } from "src/core/fighters/dto/update-fighter.dto";
import { UpdateWeightClassDto } from "src/core/weight-classes/dto/update-weight-class.dto";

export class CreateFightDto {
  fight: string;
  fighterA: UpdateFighterDto;
  fighterB: UpdateFighterDto;
  weightClass: UpdateWeightClassDto;
}
