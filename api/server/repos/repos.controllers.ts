import { Response, Request } from 'express';
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

// Deletes a repo with its id in url parameter
const remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    const repoDoesntExist = !(await Repo.findOneBy({ id }));

    if (repoDoesntExist) {
        res.status(400).send(`Can't delete a non existing repo`);
    } else if (id) {
        try {
            await Repo.delete({ id });
            res.status(200).send(`Repo ${id} successfully deleted!`)
        } catch (err) {
            res.status(500).send(`There has been an issue trying to delete: repo ${id}. ${err}`)
        }
    }
}

export default { browse, add, remove }