// DTO's
import { UpdateDetailDto } from "src/core/details/dto/update-detail.dto";
import { UpdateStatisticDto } from "src/core/statistics/dto/update-statistic.dto";

export class CreateFighterDto {
  name: string;
  statistic: UpdateStatisticDto;
  detail: UpdateDetailDto;
}
