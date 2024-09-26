import {Response, Request} from 'express';
import reposDatas from '../data/formated_repos.json';

const browse = (_: any, res: Response) => {
    res.status(200).json(reposDatas);
}

const add = (req: Request, res: Response) => {
    reposDatas.push(req.body);
    res.status(201).json(reposDatas);
}

const remove = (req: Request, res: Response)=>{
    console.log(req.params?.id);

    let tmp = [];
    tmp = reposDatas.filter(repo => repo.id !== req.params?.id);

    res.status(201).json(tmp);
}

export default {browse, add, remove}