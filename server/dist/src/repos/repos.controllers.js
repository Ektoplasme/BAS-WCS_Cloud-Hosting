"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formated_repos_json_1 = __importDefault(require("../../data/formated_repos.json"));
const repo_entities_1 = require("./repo.entities");
const browse = async (_, res) => {
    try {
        const repos = await repo_entities_1.Repo.find();
        res.status(200).json(repos);
    }
    catch (error) {
        res.sendStatus(500);
    }
};
const add = async (req, res) => {
    try {
        const repo = new repo_entities_1.Repo();
        const { name, id, url } = req.body;
        repo.name = name;
        repo.id = id;
        repo.url = url;
        await repo.save();
        res.status(201).json(repo);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const remove = (req, res) => {
    var _a;
    console.log((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
    let tmp = [];
    tmp = formated_repos_json_1.default.filter(repo => { var _a; return repo.id !== ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id); });
    res.status(201).json(tmp);
};
exports.default = { browse, add, remove };
//# sourceMappingURL=repos.controllers.js.map