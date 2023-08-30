import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

@Entity({name: 'weight_classes'})
export class WeightClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'weight_class'})
  weightClass: number;

  // @OneToOne(() => Fighter, (fighter) => fighter.statistic)
  // fighter: Fighter;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
