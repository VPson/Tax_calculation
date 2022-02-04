import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateOperationUseCase } from './UpdateOperationUseCase';


class UpdateOperationController {
	async handle(req: Request, res: Response): Promise<Response>{
		const { id } = req.params;

		const {
			nameStock,
			quantity,
			dateBuy,
			dateSell,
			valueBuy,
			valueSell,
			fees
		} = req.body;

		const updateOperationUseCase = container.resolve(UpdateOperationUseCase);

		await updateOperationUseCase.execute({
			id,
			nameStock,
			quantity,
			dateBuy,
			dateSell,
			valueBuy,
			valueSell,
			fees
		});

		return res.status(201).send();
	}
}

export { UpdateOperationController };