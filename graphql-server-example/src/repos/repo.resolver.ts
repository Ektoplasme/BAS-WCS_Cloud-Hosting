import { Arg, Field, InputType, Mutation, Query } from "type-graphql";
import { Repo } from "./repo.entities";

@InputType()
class RepoInput {
    @Field()
    title: string;    
}

export default class RepoResolver {

    // Methode GET tous les repos
    async repos() {
        const repos = await Repo.find({
            relations: {
                // status: true,
                // langs: true,
            }
        });
        return repos;
    }

    @Query(() => [])
    async getRepo() {
        const repos = await Repo.find()
        console.log(repos)
        return repos
    }

    @Mutation(() => Repo)
    async createNewRepo(@Arg("data") newRepo: RepoInput) {
        console.log(newRepo)
    }
}