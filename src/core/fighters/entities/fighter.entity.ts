import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

// Entities
import { Statistic } from '../../statistics/entities/statistic.entity';
import { Detail } from "../../details/entities/detail.entity";
import { Fight } from "../../fights/entities/fight.entity";

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Statistic, (statistic) => statistic.fighter, {eager: true})
  @JoinColumn()
  statistic: Statistic;

  @OneToOne(() => Detail, (detail) => detail.fighter, {eager: true})
  @JoinColumn()
  detail: Detail;

  @OneToMany(() => Fight, (fight) => fight.winner)
  winner: Fight[];

  @OneToMany(() => Fight, (fight) => fight.fighterA)
  fightA: Fight[];

  @OneToMany(() => Fight, (fight) => fight.fighterA)
  fightB: Fight[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
