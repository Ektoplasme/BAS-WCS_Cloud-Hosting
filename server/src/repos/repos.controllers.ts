import {Response, Request} from 'express';
import reposDatas from '../../data/formated_repos.json';
import { Repo } from "./repo.entities";


// Get all repos
const browse = async (_: any, res: Response) => {
    try {
      const repos = await Repo.find();
      res.status(200).json(repos)
    } catch (error) {
      res.sendStatus(500)
    }
  }

// Add a repo, returns the new repo object
const add = async (req: Request, res: Response) => {
    try {
        const repo = new Repo();
        const { name, id, url } = req.body;

        repo.name = name;
        repo.id = id;
        repo.url = url;

        // .save() ecrase la donnée par la nouvelle si jamais l'id est deja existant
        // utiliser upsert ou  insert
        await repo.save();
        res.status(201).json(repo);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Remove a repo (local file)
const remove = (req: Request, res: Response)=>{
    console.log(req.params?.id);

    let tmp = [];
    tmp = reposDatas.filter(repo => repo.id !== req.params?.id);

    res.status(201).json(tmp);
}

export default {browse, add, remove}