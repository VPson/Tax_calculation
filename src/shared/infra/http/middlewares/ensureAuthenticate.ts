import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string
}

export async function ensureAuthenticated( req: Request, res: Response, next: NextFunction){
	const authHeader = req.headers.authorization;
	
	if(!authHeader){
		throw new AppError('Token missing');
	}
	

	const [, token] = authHeader.split(' ');

	try{ 
		const { sub: user_id } = verify(
			token, 
			'ffdea0c3bed13906e0d6e9a59a4a6909'
		) as IPayload;

		const userRepository = new UsersRepository();
		const user = await userRepository.findById(user_id);

		if(!user) {
			throw new AppError('User does not exists!');
		}

		req.user = {
			id: user_id
		};

		next();
	} catch {
		throw new AppError('Invalid token!', 401);
	}
}