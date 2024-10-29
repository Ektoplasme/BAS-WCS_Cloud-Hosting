"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const client_1 = require("../db/client");
const repo_resolver_1 = __importDefault(require("./repos/repo.resolver"));
(async () => {
    await client_1.dataSource.initialize();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [repo_resolver_1.default],
    });
    const server = new server_1.ApolloServer({
        schema,
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
})();
//# sourceMappingURL=index.js.map