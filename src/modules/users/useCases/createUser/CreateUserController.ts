import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { name, username, password, email } = req.body;

		const createUserUseCase = container.resolve(CreateUserUseCase);

		const user = await createUserUseCase.execute({
			name,
			username,
			password,
			email
		});	

		return res.status(201).json(user);
	}
}

export { CreateUserController };