import getSchema from "../schema";
import { graphql, GraphQLSchema, print } from "graphql";
import gql from "graphql-tag";

const GET_REPOS = gql`
  query getRepo {
    getRepo {
      id
      name
      url
    }
  }
`;

describe("Repo resolvers", () => {
    let schema: GraphQLSchema;

    beforeAll(async () => {
        schema = await getSchema();
    });

    it("get all repos", async () => {
        const result = (await graphql({
            schema: schema,
            source: print(GET_REPOS),
        })) as { data: { getRepo: Array<unknown> } };

        expect(result.data.getRepo).toEqual(expect.any(Array));
    });
});