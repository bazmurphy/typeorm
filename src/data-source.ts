import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Role } from "./entity/Role";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "",
  password: "",
  database: "typeorm_learning",
  synchronize: true,
  logging: false,
  entities: [User,Role],
  migrations: [],
  subscribers: [],
});
