import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

// Entities
import { Fighter } from './entities/fighter.entity';

// Services
import { StatisticsService } from '../statistics/statistics.service';
import { CreateStatisticDto } from '../statistics/dto/create-statistic.dto';

@Injectable()
export class FightersService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
    private readonly statisticsService: StatisticsService,
  ) {}

  async create(createFighterDto: CreateFighterDto): Promise<UpdateFighterDto> {
    const newStatistic = new CreateStatisticDto();
    newStatistic.wins = 0;
    newStatistic.loses = 0;
    newStatistic.knokcouts = 0;
    newStatistic.submissions = 0;
    const newStatisticDB = await this.statisticsService.create(newStatistic);
    createFighterDto.statistic = newStatisticDB;
    return this.fighterRepository.save(createFighterDto);
  }

  async findAll(): Promise<UpdateFighterDto[]> {
    return await this.fighterRepository.find({
      relations: {
        statistic: true,
      }
    });
  }

  async findById(id: number): Promise<UpdateFighterDto> {
    const fighterDB = await this.fighterRepository.findOne({
      where: {id},
      relations: {
        statistic: true,
      }
    });

    if (!fighterDB) {
      throw new NotFoundException();
    }

    return fighterDB;
  }

  async update(id: number, updateFighterDto: UpdateFighterDto): Promise<UpdateFighterDto> {
    const fighterDB = await this.findById(id);

    if (!fighterDB) {
      throw new NotFoundException();
    }

    fighterDB.name = updateFighterDto.name;

    return await this.fighterRepository.save(fighterDB);
  }

  async remove(id: number): Promise<void> {
    const fighterDB = this.findById(id);

    if (!fighterDB) {
      throw new NotFoundException();
    }

    await this.fighterRepository.delete(id);
  }
}
