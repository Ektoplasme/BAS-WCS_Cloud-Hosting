import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { IsString } from "class-validator";
import { Field, ObjectType } from "type-graphql";
// import { Status } from "../status/status.entities";
// import { Langs } from "../langs/langs.entities";

@ObjectType()
@Entity()
export class Repo extends BaseEntity {
  @Field()
  @PrimaryColumn()
    @IsString()
    id!: string;

  @Field()
  @Column()
    @IsString()
    name!: string;

  @Field()
  @Column()
    @IsString()
    url!: string;

  // @ManyToOne(() => Status, (status: { id: any; }) => status.id)
  //   @Min(1)
  //   @Max(2)
  //   status?: Status;

  // @ManyToMany(() => Langs, lang => lang.repos)
  //   langs?: Langs[];
}