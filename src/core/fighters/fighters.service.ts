import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

// Entities
import { Fighter } from './entities/fighter.entity';

// DTO's
import { CreateStatisticDto } from '../statistics/dto/create-statistic.dto';
import { CreateDetailDto } from '../details/dto/create-detail.dto';

// Services
import { StatisticsService } from '../statistics/statistics.service';
import { DetailsService } from '../details/details.service';

@Injectable()
export class FightersService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
    private readonly statisticsService: StatisticsService,
    private readonly detailsService: DetailsService,
  ) {}

  async create(createFighterDto: CreateFighterDto): Promise<UpdateFighterDto> {
    const newStatistic = new CreateStatisticDto();
    newStatistic.wins = createFighterDto.statistic.wins;
    newStatistic.loses = createFighterDto.statistic.loses;
    newStatistic.knokcouts = createFighterDto.statistic.knokcouts;
    newStatistic.submissions = createFighterDto.statistic.submissions;
    const newStatisticDB = await this.statisticsService.create(newStatistic);
    
    const newDetail = new CreateDetailDto();
    newDetail.age = createFighterDto.detail.age;
    newDetail.nationality = createFighterDto.detail.nationality;
    newDetail.team = createFighterDto.detail.nationality;
    newDetail.weightClass = createFighterDto.detail.weightClass;
    const newDetailDB = await this.detailsService.create(newDetail);

    createFighterDto.statistic = newStatisticDB;
    createFighterDto.detail = newDetailDB;
    return this.fighterRepository.save(createFighterDto);
  }

  async findAll(): Promise<UpdateFighterDto[]> {
    return await this.fighterRepository.find({
      relations: {
        statistic: true,
        detail: true,
      }
    });
  }

  async findById(id: number): Promise<UpdateFighterDto> {
    const fighterDB = await this.fighterRepository.findOne({
      where: {id},
      relations: {
        statistic: true,
        detail: true,
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

    const statisticDB = await this.statisticsService.findById(updateFighterDto.statistic.id);

    if (!statisticDB) {
      throw new NotFoundException();
    }

    const detailDB = await this.detailsService.findById(updateFighterDto.detail.id);

    if (!detailDB) {
      throw new NotFoundException();
    }

    fighterDB.name = updateFighterDto.name;
    fighterDB.statistic = statisticDB;
    fighterDB.detail = detailDB;

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
