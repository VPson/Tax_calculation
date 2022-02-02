import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors';
import express, { Request, Response } from 'express';
import { routes } from './routes';
import { createConnection } from 'typeorm';
import { AppError } from '@shared/errors/AppError';

createConnection();

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}

	return res.status(501).json({
		status: 'error',
		message: `Internal server error - ${err.message}`,
	});
});


app.listen(3000, () => console.log('rodando'));

// na hora de rodar, tem q dar npm run buil, depois node dist/server.js
//ts-node dev serve para rodar o servidor normalmente sem criar umas pasta js 