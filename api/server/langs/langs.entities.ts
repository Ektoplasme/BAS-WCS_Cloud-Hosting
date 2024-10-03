import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Repo } from "../repos/repo.entities";

@Entity()
export class Langs extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  label!: string;

//   @ManyToMany(() => Repo, repo => repo.langs)
//   @JoinTable()
//   repos?: Repo[]
}