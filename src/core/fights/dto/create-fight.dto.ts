// DTO's
import { CreateStatisticDto } from "../../statistics/dto/create-statistic.dto";
import { UpdateFighterDto } from "../../fighters/dto/update-fighter.dto";
import { UpdateWeightClassDto } from "../../weight-classes/dto/update-weight-class.dto";

export class CreateFightDto {
  fight: string;
  fighterA: UpdateFighterDto;
  fighterB: UpdateFighterDto;
  weightClass: UpdateWeightClassDto;
  winner: UpdateFighterDto;
  results?: CreateStatisticDto
}
