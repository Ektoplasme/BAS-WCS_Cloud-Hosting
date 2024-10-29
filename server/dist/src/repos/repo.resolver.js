"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const repo_entities_1 = require("./repo.entities");
let RepoInput = class RepoInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RepoInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RepoInput.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RepoInput.prototype, "id", void 0);
RepoInput = __decorate([
    (0, type_graphql_1.InputType)()
], RepoInput);
let RepoResolver = class RepoResolver {
    async repos() {
        const repos = await repo_entities_1.Repo.find({
            relations: {}
        });
        return repos;
    }
    async getRepo() {
        const repos = await repo_entities_1.Repo.find();
        console.log(repos);
        return repos;
    }
    async getRepoById(id) {
        const repo = await repo_entities_1.Repo.findOneBy({ id });
        console.log(repo);
        return repo;
    }
    async createNewRepo(newRepo) {
        console.log(newRepo);
        let repo = new repo_entities_1.Repo();
        repo.id = newRepo.id;
        repo.url = newRepo.url;
        repo.name = newRepo.name;
        repo.save();
        return repo;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [repo_entities_1.Repo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepoResolver.prototype, "getRepo", null);
__decorate([
    (0, type_graphql_1.Query)(() => repo_entities_1.Repo),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepoResolver.prototype, "getRepoById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => repo_entities_1.Repo),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RepoInput]),
    __metadata("design:returntype", Promise)
], RepoResolver.prototype, "createNewRepo", null);
RepoResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RepoResolver);
exports.default = RepoResolver;
//# sourceMappingURL=repo.resolver.js.map