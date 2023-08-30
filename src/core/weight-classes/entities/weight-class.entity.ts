import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

// Entities
import { Detail } from "../../details/entities/detail.entity";
import { Fight } from "../../fights/entities/fight.entity";

@Entity({name: 'weight_classes'})
export class WeightClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'weight_class'})
  weightClass: string;

  @OneToMany(() => Detail, (detail) => detail.weightClass)
  detail: Detail[];

  @OneToMany(() => Fight, (fight) => fight.weightClass)
  fight: Fight[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
