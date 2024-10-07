import { Router, Response, Request  } from "express";
import { Lang } from "./langs.entities";

const langsControllers = Router();

langsControllers.get("/", async (_: any, res: Response) => {
  try {
    const lang = await Lang.find();
    res.status(200).json(lang)
  } catch (error) {
    res.sendStatus(500)
  }
});

langsControllers.post("/", async (req: Request, res: Response) => {
  try {
    const lang = new Lang();
    lang.id = req.body.id;
    lang.label = req.body.label;

    await lang.save();
    res.status(201).json(lang);

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

export default langsControllers;