import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Repo } from "../src/repos/repo.entities";
// import { Langs } from "../src/langs/langs.entities";
// import { Status } from "../src/status/status.entities";

dotenv.config();
const { BACKEND_FILE } = process.env;

export const dataSource = new DataSource({
  type: "sqlite",
  database: `${BACKEND_FILE}`,
  entities: [Repo],
  synchronize: true
});