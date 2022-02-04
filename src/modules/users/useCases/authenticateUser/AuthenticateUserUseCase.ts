import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

interface IRequest {
	username: string;
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string;
		username: string;
		email: string;
	}
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	){}

	async execute({ username, email, password }: IRequest): Promise<IResponse>{
		const user = await this.usersRepository.findByEmailAndUsername(email, username);
		console.log('aqui');
		if(!user){
			throw new AppError('Email or username incorrect!');
		}

		const passwordMatch = await compare(password, user.password);

		if(!passwordMatch){
			throw new AppError('Password incorrect!');
		}

		const token = sign({}, 'ffdea0c3bed13906e0d6e9a59a4a6909', {
			subject: user.id,
			expiresIn: '1d'
		});

		const tokenReturn: IResponse = {
			token,
			user: {
				name: user.name,
				username: user.username,
				email: user.email
			}
		};
		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };