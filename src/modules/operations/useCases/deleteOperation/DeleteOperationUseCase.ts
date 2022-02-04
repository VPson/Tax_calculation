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
	}: IRequest): Promise<void>{
		const operation = await this.operationsRepository.findById(id);

		if(!operation){
			throw new AppError('Operations not exists!', 401);
		}

		await this.operationsRepository.delete(id);
	}
}

export { DeleteOperationUseCase };