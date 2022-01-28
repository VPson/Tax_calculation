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
	}: ICreateUserDTO): Promise<void> {
	const user = this.repository.create({
		name,
		username,
		password,
		email
	});

	await this.repository.save(user);
	}

	async findByEmailAndUsername(email: string, username: string): Promise<User> {
		const user = await this.repository.findOne({ email, username });

		return user;
	}

	async findById(id: string): Promise<User> {
		const user = await this.repository.findOne( { id });

		return user;
	}


	
}

export { UsersRepository };