import { IcreateOperationDTO } from '@modules/operations/dtos/IcreateOperation';
import { Operation } from '@modules/operations/infra/typeorm/entities/Operation';
import { IOperationsRepository } from '../IOperationsRepository';

class OperationsRepositoryInMemory implements IOperationsRepository{ 
	operations: Operation[] = [];
	
	async create({
		nameStock,
		quantity,
		dateBuy,
		dateSell,
		type,
		valueBuy,
		valueSell,
		total
	}: IcreateOperationDTO): Promise<Operation>{
		const operation = new Operation();

		Object.assign(operation, {
			nameStock,
			quantity,
			dateBuy,
			dateSell,
			type,
			valueBuy,
			valueSell,
			total
		});
		this.operations.push(operation);

		return operation;
	}

}

export { OperationsRepositoryInMemory };