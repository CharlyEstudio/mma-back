import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

// Entities
import { Fighter } from "../../fighters/entities/fighter.entity";

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wins: number;

  @Column()
  loses: number;

  @Column()
  knokcouts: number;

  @Column()
  submissions: number;

  @OneToOne(() => Fighter, (fighter) => fighter.statistic, {eager: true})
  fighter: Fighter;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
