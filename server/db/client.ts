import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Repo } from "../src/repos/repo.entities";
// import { Langs } from "../src/langs/langs.entities";
// import { Status } from "../src/status/status.entities";
dotenv.config();

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } =
  process.env;

// AVEC SQLITE
// const { BACKEND_FILE } = process.env;
// export const dataSource = new DataSource({
//   type: "sqlite",
//   database: `${BACKEND_FILE}` (/db/db.sqlite),
//   entities: [Repo],
//   synchronize: true
// });

export const dataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Repo],
  synchronize: true,
});
