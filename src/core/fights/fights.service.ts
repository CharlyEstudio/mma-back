import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO's
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { UpdateFighterDto } from '../fighters/dto/update-fighter.dto';

// Entities
import { Fight } from './entities/fight.entity';

// Services
import { FightersService } from '../fighters/fighters.service';
import { WeightClassesService } from '../weight-classes/weight-classes.service';
import { StatisticsService } from '../statistics/statistics.service';

@Injectable()
export class FightsService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
    private readonly fightersService: FightersService,
    private readonly weightClassService: WeightClassesService,
    private readonly statisticsService: StatisticsService,
  ) {}

  async create(createFightDto: CreateFightDto): Promise<UpdateFightDto> {
    const fighterADB = await this.fightersService.findById(createFightDto.fighterA.id);
    if (!fighterADB) {
      throw new NotFoundException();
    }

    const fighterBDB = await this.fightersService.findById(createFightDto.fighterB.id);
    if (!fighterBDB) {
      throw new NotFoundException();
    }

    const weightClassDB = await this.weightClassService.findById(createFightDto.weightClass.id);
    if (!weightClassDB) {
      throw new NotFoundException();
    }

    createFightDto.fighterA = fighterADB;
    createFightDto.fighterB = fighterBDB;
    createFightDto.weightClass = weightClassDB;
    
    return this.fightRepository.save(createFightDto);
  }

  async findAll(): Promise<UpdateFightDto[]> {
    return this.fightRepository.find({
      relations: {
        fighterA: true,
        fighterB: true,
        weightClass: true,
      }
    });
  }

  async findById(id: number): Promise<UpdateFightDto> {
    const fightDB = await this.fightRepository.findOne({
      where: {id},
      relations: {
        fighterA: true,
        fighterB: true,
        weightClass: true,
      }
    });

    if (!fightDB) {
      throw new NotFoundException();
    }

    return fightDB;
  }

  async update(id: number, updateFightDto: UpdateFightDto): Promise<UpdateFightDto> {
    const fightDB = await this.findById(id);

    if (!fightDB) {
      throw new NotFoundException();
    }

    const fighterADB = await this.fightersService.findById(updateFightDto.fighterA.id);
    if (!fighterADB) {
      throw new NotFoundException();
    }

    const fighterBDB = await this.fightersService.findById(updateFightDto.fighterB.id);
    if (!fighterBDB) {
      throw new NotFoundException();
    }

    const weightClassDB = await this.weightClassService.findById(updateFightDto.weightClass.id);
    if (!weightClassDB) {
      throw new NotFoundException();
    }

    const winnerDB = await this.fightersService.findById(updateFightDto.winner.id);
    if (!winnerDB) {
      throw new NotFoundException();
    }

    updateFightDto.fighterA = fighterADB;
    updateFightDto.fighterB = fighterBDB;
    updateFightDto.weightClass = weightClassDB;
    const {winner, results, ...other} = updateFightDto;
    updateFightDto.winner = winnerDB;

    const update = await this.fightRepository.save(other);

    let fighterWinner = new UpdateFighterDto();
    if (winner) {
      fighterWinner = winner.id === fighterADB.id ? fighterADB : fighterBDB;
    }

    await this.statisticsService.update(fighterWinner.statistic.id, results);
    return update;
  }

  async remove(id: number): Promise<void> {
    const fightDB = this.findById(id);

    if (!fightDB) {
      throw new NotFoundException();
    }

    await this.fightRepository.delete(id);
  }
}
