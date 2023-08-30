import { Entity, Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

// Entities
import { Fighter } from "../../fighters/entities/fighter.entity";
import { WeightClass } from "../../weight-classes/entities/weight-class.entity";

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fight: string;

  @ManyToOne(() => Fighter, (fighter) => fighter.winner, {eager: true})
  winner: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightA, {eager: true})
  fighterA: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fightB, {eager: true})
  fighterB: Fighter;

  @ManyToOne(() => WeightClass, (weightClass) => weightClass.fight, {eager: true})
  weightClass: WeightClass;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
