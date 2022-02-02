import { ICreateOperationDTO } from '@modules/operations/dtos/ICreateOperationDTO';
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
	}: ICreateOperationDTO): Promise<Operation>{
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

	async findById(id: string): Promise<Operation> {
		// tem que criar uma operação para podr apagar]
		const operation = this.operations.find((operation) => operation.id === id);
		return operation;
	}

	async delete(id: string): Promise<Operation[]> {
		const operations = await this.operations.filter((operation) => {
			return operation.id !== id;
		});

		return operations;
	}

}

export { OperationsRepositoryInMemory };