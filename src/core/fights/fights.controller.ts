import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// DTO's
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';

// Services
import { FightsService } from './fights.service';

@Controller('fights')
export class FightsController {
  constructor(private readonly fightsService: FightsService) {}

  @Post()
  create(@Body() createFightDto: CreateFightDto) {
    return this.fightsService.create(createFightDto);
  }

  @Get()
  findAll() {
    return this.fightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightsService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFightDto: UpdateFightDto) {
    return this.fightsService.update(+id, updateFightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightsService.remove(+id);
  }
}
