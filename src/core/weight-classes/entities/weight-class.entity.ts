import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

// Entities
import { Detail } from "../../details/entities/detail.entity";

@Entity({name: 'weight_classes'})
export class WeightClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'weight_class'})
  weightClass: number;

  @OneToMany(() => Detail, (detail) => detail.weightClass)
  detail: Detail[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
