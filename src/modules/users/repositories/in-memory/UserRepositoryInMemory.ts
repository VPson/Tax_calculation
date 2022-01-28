import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UserRepositoryInMemory implements IUsersRepository{
	users: User[] = [];

	async create({
		name,
		username,
		password,
		email
	}: ICreateUserDTO): Promise<User> {
		const user = new User();

		Object.assign(user, {
			name,
			username,
			password,
			email
		});
		this.users.push(user);
		return user;
	}
	
}

export { UserRepositoryInMemory };