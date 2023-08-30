// DTO's
import { UpdateStatisticDto } from "src/core/statistics/dto/update-statistic.dto";

export class CreateFighterDto {
  name: string;
  statistic: UpdateStatisticDto;
}
