import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateWeightClassDto } from './dto/create-weight-class.dto';
import { UpdateWeightClassDto } from './dto/update-weight-class.dto';

// Entities
import { WeightClass } from './entities/weight-class.entity';

@Injectable()
export class WeightClassesService {
  constructor(
    @InjectRepository(WeightClass)
    private readonly weightClassRepository: Repository<WeightClass>,
  ) {}

  async create(createWeightClassDto: CreateWeightClassDto): Promise<UpdateWeightClassDto> {
    return await this.weightClassRepository.save(createWeightClassDto);
  }

  async findAll(): Promise<UpdateWeightClassDto[]> {
    return await this.weightClassRepository.find();
  }

  async findById(id: number): Promise<UpdateWeightClassDto> {
    const weightClassDB = await this.weightClassRepository.findOne({
      where: {id}
    });

    if (!weightClassDB) {
      throw new NotFoundException();
    }

    return weightClassDB;
  }

  async update(id: number, updateWeightClassDto: UpdateWeightClassDto): Promise<UpdateWeightClassDto> {
    const weightClassDB = await this.findById(id);

    if (!weightClassDB) {
      throw new NotFoundException();
    }

    weightClassDB.weightClass = updateWeightClassDto.weightClass;

    return await this.weightClassRepository.save(weightClassDB);
  }

  async remove(id: number): Promise<void> {
    const weightClassDB = this.findById(id);

    if (!weightClassDB) {
      throw new NotFoundException();
    }

    await this.weightClassRepository.delete(id);
  }
}
