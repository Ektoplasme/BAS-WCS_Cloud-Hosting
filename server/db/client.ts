import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Repo } from "../src/repos/repo.entities";
// import { Langs } from "../src/langs/langs.entities";
// import { Status } from "../src/status/status.entities";

dotenv.config();


// AVEC SQLITE

// const { BACKEND_FILE } = process.env;
// export const dataSource = new DataSource({
//   type: "sqlite",
//   database: `${BACKEND_FILE}`,
//   entities: [Repo],
//   synchronize: true
// });



// AVEC POSTGRES
export const dataSource = new DataSource({
  type: "postgres",
  // avec la db sur docker en local
  // host: "db",
  // username: "postgres",
  // password: "password",
  // database: "postgres",

  // Avec la db sur l'hebergeur alwaysdata.net
  host: "postgresql-kainomel.alwaysdata.net",
  port: 5432,
  username: "kainomel",
  password: "wildcodeschool",
  database: "kainomel_bac-a-sable",
  entities: [Repo],
  synchronize: true,
});
