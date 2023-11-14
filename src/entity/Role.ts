import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

export enum UserRoleTypes {
  Trainee = "trainee",
  Volunteer = "volunteer",
  Admin = "admin",
}

@Entity()
export class Role {
  // @PrimaryColumn() // Standard Primary Key Column?
  @PrimaryGeneratedColumn() // Auto Increment Primary Key Column ?
  @OneToOne(() => User, (user) => user.roleId) // a function that returns the name of the inverse side of the relation
  id: User;

  @Column({ type: "enum", enum: UserRoleTypes, default: UserRoleTypes.Trainee })
  role: string;

  // create a one to one relationship between (two entities) Role and User
  // () => ___ a function that returns the class of the entity with which we want to make our relationship

  // @JoinColumn decorator indicates that this side of the relationship will own the relationship
  // Relations can be unidirectional ---> or bidirectional <--->
  // you put @JoinColumn() on the OWNER side of the Relation
  // The owning side of a relationship contains a column with a foreign key in the database.
}
