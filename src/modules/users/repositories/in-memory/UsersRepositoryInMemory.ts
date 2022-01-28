import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository{
	users: User[] = [];

	async create({
		name,
		username,
		password,
		email
	}: ICreateUserDTO): Promise<void> {
		const user = new User();

		Object.assign(user, {
			name,
			username,
			password,
			email
		});
		this.users.push(user);
	}

	async findByEmailAndUsername(email: string, username: string): Promise<User> {
		return this.users.find((user) => user.email === email && user.username === username);
	}

	async findById(id: string): Promise<User> {
		return this.users.find((user) => user.id === id);
	}
	
}

export { UsersRepositoryInMemory };