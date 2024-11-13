import { buildSchema } from "type-graphql";
import RepoResolver from "./repos/repo.resolver";

const getSchema = async () => await buildSchema({
    resolvers: [RepoResolver],
});

export default getSchema;