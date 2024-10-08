var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Arg, Field, InputType, Mutation, Query } from "type-graphql";
import { Repo } from "./repo.entities";
let RepoInput = class RepoInput {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], RepoInput.prototype, "title", void 0);
RepoInput = __decorate([
    InputType()
], RepoInput);
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
    async getRepo() {
        const repos = await Repo.find();
        console.log(repos);
        return repos;
    }
    async createNewRepo(newRepo) {
        console.log(newRepo);
    }
}
__decorate([
    Query(() => []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepoResolver.prototype, "getRepo", null);
__decorate([
    Mutation(() => Repo),
    __param(0, Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RepoInput]),
    __metadata("design:returntype", Promise)
], RepoResolver.prototype, "createNewRepo", null);
