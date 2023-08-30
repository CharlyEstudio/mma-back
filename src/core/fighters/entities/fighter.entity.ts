import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

// Entities
import { Statistic } from '../../statistics/entities/statistic.entity';
import { Detail } from "../../details/entities/detail.entity";

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Statistic, (statistic) => statistic.fighter)
  @JoinColumn()
  statistic: Statistic;

  @OneToOne(() => Detail, (detail) => detail.fighter, {eager: true})
  @JoinColumn()
  detail: Detail;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
