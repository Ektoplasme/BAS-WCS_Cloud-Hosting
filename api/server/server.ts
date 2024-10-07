import express from 'express';
import router from './router';
import { dataSource } from "./db/client";

const app = express();
const port = 3000;

// Pour pouvoir lire le contenu en JSON dans les body
app.use(express.json());

app.get('/', (req:any, res:any) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Listening on port ${port}`);
});

app.use('/', router);
