import { Router, NextFunction } from 'express';
import reposDatas from '../data/formated_repos.json'

// Outil pour la validation de données
import Joi from 'joi';

const router = Router();

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

    if (!error) next();

    // 422 Unprocessable Entity
    res.status(422).json(error);
}

// GET tous les repos
router.get('/', (_, res)=>{
    res.status(200).json(reposDatas);
});

// POST un nouveau repo et renvoie la liste modifiee
router.post('/', validateRepoData, (req, res)=>{
    reposDatas.push(req.body);
    res.status(201).json(reposDatas);
});

export default router;