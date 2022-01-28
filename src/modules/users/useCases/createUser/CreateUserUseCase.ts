import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	){}

	async execute({ name, username, password, email }: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmailAndUsername(email,username);

		if(userAlreadyExists){
			throw new Error('A user has already been registered with this email or username!');
		}

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({
			name,
			username,
			password: passwordHash,
			email
		});

	}

}

export { CreateUserUseCase };