import { ApolloServer } from '@apollo/server'; // preserve-line
import { startStandaloneServer } from '@apollo/server/standalone'; // preserve-line
import { buildSchema } from 'type-graphql'
import "reflect-metadata";
import { dataSource } from "../db/client";

import RepoResolver from "./repos/repo.resolver";

(async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [RepoResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();