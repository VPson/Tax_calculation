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
		expect(user).toHaveProperty('id');
	});

});