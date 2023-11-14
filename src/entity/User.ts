import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {
  // @PrimaryColumn() // Standard Primary Key Column?
  @PrimaryGeneratedColumn() // Auto Increment Primary Key Column ?
  id: number;

  @Column({ length: 20 })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column("text")
  bio: string;

  @Column()
  isAdmin: boolean;

  @OneToOne(() => Role, (role) => role.id)
  @JoinColumn()
  roleId: Role;
}
