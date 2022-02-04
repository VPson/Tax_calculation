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
	
	async	findById(id: string): Promise<Operation> {
		const operation = await this.repository.findOne({ id });
		return operation;
	}

	async delete(id: string): Promise<void> {
		await this.repository.delete(id);
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
		total
	}: ICreateOperationDTO): Promise<void> {
		await this.repository.update(id,{
			nameStock: nameStock,
			quantity: quantity,
			dateBuy: dateBuy,
			dateSell: dateSell,
			type: type,
			valueBuy: valueBuy,
			valueSell: valueSell,
			fees: fees,
			total: total
		});
	}
}

export { OperationsRepository };