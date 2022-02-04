import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
	id: string
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	type?: string,
	valueBuy: number,
	valueSell: number,
	fees: number,
	total?: number,
}

@injectable()
class UpdateOperationUseCase {
	constructor(
		@inject('OperationsRepository')
		private operationsRepository: IOperationsRepository
	){}

	async execute({
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
	}: IRequest): Promise<void>{
		
		const operation = await this.operationsRepository.findById(id);

		if(!operation){
			throw new AppError('Can not find this operation!');
		}

		if(dateBuy === dateSell){
			type = 'dayTrade';
		}else if(dateSell > dateBuy){
			type = 'swingTrade';
		}else if (dateBuy>dateSell){
			throw new AppError('The sale date can not be grater than purchase date!');
		}

		const totalBuy = valueBuy * quantity;
		const totalSell = valueSell * quantity;
		total = (totalSell - totalBuy) - fees;

		await this.operationsRepository.update({
			id,
			nameStock,
			quantity,
			dateBuy,
			dateSell,
			type,
			valueBuy,
			valueSell,
			fees,
			total,
		});
	}
}

export { UpdateOperationUseCase };