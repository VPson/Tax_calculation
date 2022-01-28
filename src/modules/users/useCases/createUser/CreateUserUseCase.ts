import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

interface IRequest {
	name: string;
	username: string;
	password: string;
	email: string;
}

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	){}

	async execute({ name, username, password, email }: IRequest): Promise<User> {

		const passwordHash = await hash(password, 8);

		const user = await this.usersRepository.create({
			name,
			username,
			password: passwordHash,
			email
		});

		return user;
	}

}

export { CreateUserUseCase };