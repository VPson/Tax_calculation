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

	async delete(id: string): Promise<void> {
		const operation = this.operations.find((operation) => operation.id === id );
		this.operations.splice(this.operations.indexOf(operation));

		// const operations = await this.operations.filter((operation) => {
		// 	operation.id !== id;
		// });
	}

	async update({			
		id,
		nameStock,
		quantity,
		dateBuy,
		dateSell,
		type,
		valueBuy,
		valueSell,
		fees,
		total,}: ICreateOperationDTO): Promise<void> {
		const findIndex = this.operations.findIndex((operation) => operation.id === id);
		this.operations[findIndex].nameStock = nameStock;
		this.operations[findIndex].quantity = quantity;
		this.operations[findIndex].dateBuy = dateBuy;
		this.operations[findIndex].dateSell = dateSell;
		this.operations[findIndex].type = type;
		this.operations[findIndex].valueBuy = valueBuy;
		this.operations[findIndex].valueSell = valueSell;
		this.operations[findIndex].fees = fees;
		this.operations[findIndex].total = total;
	}

}

export { OperationsRepositoryInMemory };