import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// DTO's
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

// Services
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticsService.create(createStatisticDto);
  }

  @Get()
  findAll() {
    return this.statisticsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.statisticsService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatisticDto: CreateStatisticDto) {
    return this.statisticsService.update(+id, updateStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticsService.remove(+id);
  }
}
