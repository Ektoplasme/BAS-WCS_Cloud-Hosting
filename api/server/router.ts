import { Router, NextFunction } from 'express';
import reposControllers from './repos/repos.controllers'

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

    if (!error){
        next()
    } else {
        res.status(422).json(error)
    };
}

// GET tous les repos
router.get('/', reposControllers.browse);

// POST un nouveau repo et renvoie la liste modifiee
router.post('/', validateRepoData, reposControllers.add);

// DELETE un repo depuis son id dans les query params
router.delete('/:id', reposControllers.remove);

router.put('/', validateRepoData, (req, res)=>{
    // Prendre l'id dans req pour supprimer la data correspondante
    // Push la data de req a la place de l'id
})

export default router;