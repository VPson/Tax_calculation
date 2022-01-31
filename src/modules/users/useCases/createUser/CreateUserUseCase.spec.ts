import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
	});

	it('Should be able to create a new user', async () => {
		const user = await createUserUseCase.execute({
				name: 'vinicius',
				username: 'vpson',
				password: '1289',
				email: 'viniciuspinto10vsp@gmail.com'
			});
		expect(user).toBeUndefined();
	});

	it('Should not create 2 users with same email or username', async () => {
		expect(async () => {
			await createUserUseCase.execute({
				name: 'vinicius1',
				username: 'usernameTest',
				password: 'senha1',
				email: 'emailTest'
			});
			await createUserUseCase.execute({
				name: 'vinicius2',
				username: 'usernameTest',
				password: 'senha2',
				email: 'emailTest'
			});
		}).rejects.toBeInstanceOf(AppError);
	});

});