import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// DTO's
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

// Services
import { FightersService } from './fighters.service';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}

  @Post()
  create(@Body() createFighterDto: CreateFighterDto) {
    return this.fightersService.create(createFighterDto);
  }

  @Get()
  findAll() {
    return this.fightersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightersService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFighterDto: UpdateFighterDto) {
    return this.fightersService.update(+id, updateFighterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightersService.remove(+id);
  }
}
