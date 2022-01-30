import { ICreateOperationDTO } from '@modules/operations/dtos/ICreateOperationDTO';
import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';
import { getRepository, Repository } from 'typeorm';
import { Operation } from '../entities/Operation';

class OperationsRepository implements IOperationsRepository{
	private repository: Repository<Operation>;

	constructor() {
		this.repository = getRepository(Operation);
	}

	async create({
		nameStock, 
		quantity, 
		dateBuy, 
		dateSell,
		type,
		valueBuy,
		valueSell,
		fees,
		total,
		user_id,
		}: ICreateOperationDTO): Promise<Operation> {

			const operation = this.repository.create({ 
				nameStock, 
				quantity, 
				dateBuy, 
				dateSell,
				type,
				valueBuy,
				valueSell,
				fees,
				total,
				user_id
			});
			
			await this.repository.save(operation);

			return operation;
		}
	
}

export { OperationsRepository };