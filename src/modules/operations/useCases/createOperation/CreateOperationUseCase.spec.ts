import { OperationsRepositoryInMemory } from '@modules/operations/repositories/in-memory/OperationsRepositoryInMemory';
import { CreateOperationUseCase } from './CreateOperationUseCase';

let operationsRepositoryInMemory: OperationsRepositoryInMemory;
let createOperationUseCase: CreateOperationUseCase;

describe('Create Operation', () => {
	beforeEach(() => {
		operationsRepositoryInMemory = new OperationsRepositoryInMemory();
		createOperationUseCase = new CreateOperationUseCase(operationsRepositoryInMemory);
	});

	it('should able to create an operation', async () => {
		const b = new Date(2019, 1, 1);
		const s = new Date(2020, 1, 1);

		const operation = await createOperationUseCase.execute({
			nameStock: 'USIM5',
			quantity: 200,
			dateBuy: b,
			dateSell: s,
			type: 'swingTrade',
			valueBuy: 1,
			valueSell: 2,
			fees: 0.1,
			total: 200,
		});
		expect(operation).toHaveProperty('id');
	});

});