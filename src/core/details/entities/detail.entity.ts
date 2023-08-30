import { Entity, Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

// Entities
import { WeightClass } from "../../weight-classes/entities/weight-class.entity";
import { Fighter } from "../../fighters/entities/fighter.entity";


@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @Column()
  age: number;

  @ManyToOne(() => WeightClass, (weightClass) => weightClass.detail, {eager: true})
  weightClass: WeightClass;

  @OneToOne(() => Fighter, (fighter) => fighter.detail)
  fighter: Fighter;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
