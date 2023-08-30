import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'id_fighter'})
  idFighter: number;

  @Column()
  wins: number;

  @Column()
  loses: number;

  @Column()
  knokcouts: number;

  @Column()
  submissions: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
