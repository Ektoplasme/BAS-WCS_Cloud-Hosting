import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Repo } from "../src/repos/repo.entities";
// import { Langs } from "../src/langs/langs.entities";
// import { Status } from "../src/status/status.entities";

dotenv.config();

// const { BACKEND_FILE } = process.env;

// export const dataSource = new DataSource({
//   type: "sqlite",
//   database: `${BACKEND_FILE}`,
//   entities: [Repo],
//   synchronize: true
// });

export const dataSource = new DataSource({
  type: "postgres",
  host: "db", // Nom de l'image associé à Postgres --name dans la commande
  port: 5432,
  username: "postgres",
  password: "password", // -e POSTGRES_PASSWORD=
  database: "postgres",
  entities: [Repo],
  synchronize: true,
});