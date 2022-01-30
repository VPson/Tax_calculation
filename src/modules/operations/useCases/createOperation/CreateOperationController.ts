import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOperationUseCase } from './CreateOperationUseCase';

class CreateOperationsController {
	async handle(req: Request, res: Response): Promise<Response>{
		const { 
			nameStock, 
			quantity, 
			dateBuy, 
			dateSell,
			valueBuy,
			valueSell,
			fees
			} = req.body;
			
		const { id } = req.user;
		const user_id = id;

		const createOperationUseCase = container.resolve(CreateOperationUseCase);

		const operation = await createOperationUseCase.execute({
			nameStock, 
			quantity, 
			dateBuy, 
			dateSell,
			valueBuy,
			valueSell,
			fees,
			user_id
		});

		return res.status(201).json(operation);
	}
}

export { CreateOperationsController };