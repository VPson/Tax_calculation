import 'reflect-metadata';
import express from 'express';
import { router } from '../../../routes/lanc.routes';
import { createConnection } from 'typeorm';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log('rodando'));

// na hora de rodar, tem q dar npm run buil, depois node dist/server.js
//ts-node dev serve para rodar o servidor normalmente sem criar umas pasta js 