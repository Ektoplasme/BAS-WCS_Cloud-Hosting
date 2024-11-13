import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import "reflect-metadata";
import { dataSource } from "../db/client";
import getSchema from './schema';

import * as dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;

(async () => {
  await dataSource.initialize();
  const schema = await getSchema();

  const server = new ApolloServer({
    schema,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { host: '0.0.0.0', port: Number(PORT) },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();