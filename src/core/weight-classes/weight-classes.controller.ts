import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// DTO's
import { CreateWeightClassDto } from './dto/create-weight-class.dto';
import { UpdateWeightClassDto } from './dto/update-weight-class.dto';

// Services
import { WeightClassesService } from './weight-classes.service';

@Controller('weight-classes')
export class WeightClassesController {
  constructor(private readonly weightClassesService: WeightClassesService) {}

  @Post()
  create(@Body() createWeightClassDto: CreateWeightClassDto) {
    return this.weightClassesService.create(createWeightClassDto);
  }

  @Get()
  findAll() {
    return this.weightClassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weightClassesService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeightClassDto: UpdateWeightClassDto) {
    return this.weightClassesService.update(+id, updateWeightClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weightClassesService.remove(+id);
  }
}
