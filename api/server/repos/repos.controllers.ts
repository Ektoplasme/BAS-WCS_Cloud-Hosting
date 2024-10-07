import { Router, Response, Request, NextFunction } from 'express';
import { Repo } from "./repo.entities";

// Outil pour la validation de données
import Joi from 'joi';

const reposControllers = Router();

// Schema de validation
const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    url: Joi.string().required(),
    languages: Joi.array().required()
});

// On valide les données avant de les envoyer en BDD à l'aide de JOI
const validateRepoData = (req:any, res:any, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (!error){
        next()
    } else {
        res.status(422).json(error)
    };
}

// Get all repos
const browse = async (_: any, res: Response) => {
    console.log("dans browse");
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

reposControllers.get('/', browse);
reposControllers.post('/', validateRepoData, add);
reposControllers.delete('/:id', remove);
reposControllers.put('/', validateRepoData, (req, res)=>{});

export default reposControllers;