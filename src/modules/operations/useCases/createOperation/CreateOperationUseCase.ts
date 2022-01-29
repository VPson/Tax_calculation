import { IcreateOperationDTO } from '@modules/operations/dtos/IcreateOperation';
import { Operation } from '@modules/operations/infra/typeorm/entities/Operation';
import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';

class CreateOperationUseCase {
	constructor(
		private operationsRepository: IOperationsRepository
	){}

	async execute({ 
		nameStock,
		quantity,
		dateBuy,
		dateSell,
		type,
		valueBuy,
		valueSell,
		fees,
		total }: IcreateOperationDTO): Promise<Operation> {
			const operation = await this.operationsRepository.create({
				nameStock,
				quantity,
				dateBuy,
				dateSell,
				type,
				valueBuy,
				valueSell,
				fees,
				total
			});

			return operation;
		}
}

export { CreateOperationUseCase };