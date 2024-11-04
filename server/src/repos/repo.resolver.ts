import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Repo } from "./repo.entities";

@InputType()
class RepoInput {
    @Field()
    name: string;
    @Field()
    url: string;
    @Field()
    id: string;
}

@Resolver()
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

    // Get all repos
    @Query(() => [Repo])
    async getRepo() {
        console.log("GET REPO")
        const repos = await Repo.find()
        console.log(repos)
        return repos
    }

    // Get repo by id
    @Query(() => Repo)
    async getRepoById(@Arg("id", () => String) id: string) {
        const repo = await Repo.findOneBy({ id })
        console.log(repo)
        return repo
    }

    // Create new repo
    @Mutation(() => Repo)
    async createNewRepo(@Arg("data") newRepo: RepoInput) {
        let repo = new Repo();

        repo.id = newRepo.id;
        repo.url = newRepo.url;
        repo.name = newRepo.name;

        repo.save();

        return repo;
    }
}