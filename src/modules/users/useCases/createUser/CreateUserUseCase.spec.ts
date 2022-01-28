import { UserRepositoryInMemory } from '@modules/users/repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
	beforeEach(() => {
		userRepositoryInMemory = new UserRepositoryInMemory();
		createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
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
		}).rejects.toBeInstanceOf(Error);
	});

});