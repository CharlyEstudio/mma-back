import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';

// Entities
import { Detail } from './entities/detail.entity';

// Services
import { WeightClassesService } from '../weight-classes/weight-classes.service';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(Detail)
    private readonly detailRepository: Repository<Detail>,
    private readonly weightClassService: WeightClassesService,
  ) {}

  async create(createDetailDto: CreateDetailDto): Promise<UpdateDetailDto> {
    const weightClassDB = await this.weightClassService.findById(createDetailDto.weightClass.id);
    if (!weightClassDB) {
      throw new NotFoundException();
    }

    createDetailDto.weightClass = weightClassDB;

    return await this.detailRepository.save(createDetailDto);
  }

  async findAll(): Promise<UpdateDetailDto[]> {
    return await this.detailRepository.find({
      relations: {
        weightClass: true,
      }
    });
  }

  async findById(id: number): Promise<UpdateDetailDto> {
    const detailsDB = await this.detailRepository.findOne({
      where: {id},
      relations: {
        weightClass: true,
      }
    });

    if (!detailsDB) {
      throw new NotFoundException();
    }

    return detailsDB;
  }

  async update(id: number, updateDetailDto: UpdateDetailDto): Promise<UpdateDetailDto> {
    const detailsDB = await this.findById(id);

    if (!detailsDB) {
      throw new NotFoundException();
    }

    detailsDB.age = updateDetailDto.age;
    detailsDB.nationality = updateDetailDto.nationality;
    detailsDB.team = updateDetailDto.team;
    detailsDB.weightClass = updateDetailDto.weightClass;

    return await this.detailRepository.save(detailsDB);
  }

  async remove(id: number): Promise<void> {
    const detailsDB = this.findById(id);

    if (!detailsDB) {
      throw new NotFoundException();
    }

    await this.detailRepository.delete(id);
  }
}
