import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

// Entities
import { WeightClass } from "../../weight-classes/entities/weight-class.entity";


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

  @ManyToOne(() => WeightClass, (weightClass) => weightClass.detail)
  weightClass: WeightClass;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
