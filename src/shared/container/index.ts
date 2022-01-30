import { container } from 'tsyringe';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';
import { OperationsRepository } from '@modules/operations/infra/typeorm/repositories/OperationsRepository';


container.registerSingleton<IUsersRepository>(
	'UsersRepository', 
	UsersRepository
);

container.registerSingleton<IOperationsRepository>(
	'OperationsRepository', 
	OperationsRepository
);

