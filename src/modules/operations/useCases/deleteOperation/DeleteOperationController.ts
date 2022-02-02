import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteOperationUseCase } from './DeleteOperationUseCase';

class DeleteOperationController{
	async handle(req: Request, res: Response): Promise<Response>{
		const { id } = req.params;
		
		const deleteOperationUseCase = container.resolve(DeleteOperationUseCase);

		const operations = await deleteOperationUseCase.execute({id});

		return res.json(operations);
	}

}

export { DeleteOperationController };