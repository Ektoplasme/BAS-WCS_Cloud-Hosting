import { Router } from 'express';
import reposDatas from '../data/formated_repos.json'
// Fichier des routes

const router = Router();

const addLanguage = async (req: any, res: any, next: any) => {
    try {
        const body = req.body;
        console.log(body);
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}

router.post('/languages', addLanguage);

router.get('/', (_, res)=>{
    res.status(200).json(reposDatas);
});

router.post('/', (req, res)=>{
    console.log("Dans le post de repo, req", req);
    reposDatas.push(req.body);
    res.status(201).json(reposDatas);
});



export default router;