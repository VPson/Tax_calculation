import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/users/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
	});

	it('should be able to authenticate an user', async () => {
		const user: ICreateUserDTO = {
			name: 'vinicius',
			username: 'viniciusvsp',
			password: '123',
			email: 'vinicius@gmail.com'
		};
		await createUserUseCase.execute(user);

		const result = await authenticateUserUseCase.execute({
			email: user.email, 
			username: user.username,
			password: user.password
		});

		expect(result).toHaveProperty('token');
	});
});