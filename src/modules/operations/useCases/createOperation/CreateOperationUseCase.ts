import { Operation } from '@modules/operations/infra/typeorm/entities/Operation';
import { IOperationsRepository } from '@modules/operations/repositories/IOperationsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	type?: string,
	valueBuy: number,
	valueSell: number,
	fees: number,
	total?: number,
	user_id?: string
}

@injectable()
class CreateOperationUseCase {
	constructor(
		@inject('OperationsRepository')
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
		total,
		user_id }: IRequest): Promise<Operation> {

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

			const operation = await this.operationsRepository.create({
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

			return operation;
		}
}

export { CreateOperationUseCase };