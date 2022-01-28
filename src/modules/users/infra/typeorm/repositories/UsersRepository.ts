import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository{
	private repository: Repository<User>;
	
	constructor(){
		this.repository = getRepository(User);
	}

	async create({
		name,
		username,
		password,
		email
	}: ICreateUserDTO): Promise<User> {
	const user = this.repository.create({
		name,
		username,
		password,
		email
	});

	this.repository.save(user);

	return user;
	}
	
}

export { UsersRepository };