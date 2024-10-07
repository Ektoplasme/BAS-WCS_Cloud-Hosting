import { DataSource } from "typeorm";
// import * as dotenv from "dotenv";
import { Repo } from "../repos/repo.entities";
import { Lang } from "../langs/langs.entities";
import { Status } from "../status/status.entities";

// dotenv.config();
// const { BACKEND_FILE } = process.env;

export const dataSource = new DataSource({
  type: "sqlite",
  //database: `${BACKEND_FILE}`,
  database: "./server/db/database.sql",
  entities: [Repo, Lang, Status],
  synchronize: true,
  logging: true
});