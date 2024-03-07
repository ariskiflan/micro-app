import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Article } from "./entity/Article";
import { Candidate } from "./entity/Candidate";
import { Vote } from "./entity/Vote";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "ariskiflan",
  database: "micro_app",
  synchronize: true,
  logging: false,
  entities: [User, Article, Candidate, Vote],
  migrations: [],
  subscribers: [],
});
