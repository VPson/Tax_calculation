import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository{
	create(data: ICreateUserDTO): Promise<void>;
	findByEmailAndUsername(email: string, username: string): Promise<User>
}

export { IUsersRepository };