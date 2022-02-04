import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateOperationUseCase } from './UpdateOperationUseCase';


class UpdateOperationController {
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

		const { id } = req.params;

		const updateOperationUseCase = container.resolve(UpdateOperationUseCase);

		const operation = await updateOperationUseCase.execute({
			id,
			nameStock, 
			quantity, 
			dateBuy, 
			dateSell,
			valueBuy,
			valueSell,
			fees
		});

		return res.status(201).json(operation);
	}
}

export { UpdateOperationController };