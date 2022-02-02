import { Operation } from '@modules/operations/infra/typeorm/entities/Operation';
import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
	id: string
}

@injectable()
class DeleteOperationUseCase {
	constructor(
		@inject('OperationsRepository')
		private operationsRepository: IOperationsRepository
	){}

	async execute({
		id
	}: IRequest): Promise<Operation[]>{
		const operation = await this.operationsRepository.findById(id);

		if(!operation){
			throw new AppError('Operations not exists!', 401);
		}

		const operations = await this.operationsRepository.delete(id);

		return operations;

	}
}

export { DeleteOperationUseCase };