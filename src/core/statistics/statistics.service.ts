import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

// Entities
import { Statistic } from './entities/statistic.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticsRepository: Repository<Statistic>,
  ) {}

  async create(createStatisticDto: CreateStatisticDto): Promise<UpdateStatisticDto> {
    return this.statisticsRepository.save(createStatisticDto);
  }

  async findAll(): Promise<UpdateStatisticDto[]> {
    return await this.statisticsRepository.find();
  }

  async findById(id: number): Promise<UpdateStatisticDto> {
    const statistic = await this.statisticsRepository.findOne({
      where: {id}
    });

    if (!statistic) {
      throw new NotFoundException();
    }

    return statistic;
  }

  async update(id: number, updateStatisticDto: CreateStatisticDto): Promise<UpdateStatisticDto> {
    const statisticDB = await this.findById(id);

    if (!statisticDB) {
      throw new NotFoundException();
    }

    statisticDB.wins = updateStatisticDto.wins;
    statisticDB.loses = updateStatisticDto.loses;
    statisticDB.knokcouts = updateStatisticDto.submissions;

    return await this.statisticsRepository.save(statisticDB);
  }

  async remove(id: number): Promise<void> {
    const statisticDB = this.findById(id);

    if (!statisticDB) {
      throw new NotFoundException();
    }

    await this.statisticsRepository.delete(id);
  }
}
