import { OperationsRepositoryInMemory } from '@modules/operations/repositories/in-memory/OperationsRepositoryInMemory';
import { CreateOperationUseCase } from '../createOperation/CreateOperationUseCase';
import { DeleteOperationUseCase } from './DeleteOperationUseCase';

let operationsRepositoryInMemory: OperationsRepositoryInMemory;
let deleteOperationUseCase: DeleteOperationUseCase;
let createOperationUseCase: CreateOperationUseCase;

describe('Delete an operation', () => {
	beforeEach(() => {
		operationsRepositoryInMemory = new OperationsRepositoryInMemory();
		deleteOperationUseCase = new DeleteOperationUseCase(operationsRepositoryInMemory);
		createOperationUseCase = new CreateOperationUseCase(operationsRepositoryInMemory);

	});

	it('should be able to delete an operation', async () => {
		const b = new Date(2019, 1, 1);
		const s = new Date(2020, 1, 1);

		const operation = await createOperationUseCase.execute({
			nameStock: 'operationToBeExcluided',
			quantity: 200,
			dateBuy: b,
			dateSell: s,
			type: 'operationToBeExcluided',
			valueBuy: 2,
			valueSell: 1,
			fees: 0.1,
			total: 200,
		});

		await createOperationUseCase.execute({
			nameStock: 'RestOfOperations',
			quantity: 200,
			dateBuy: b,
			dateSell: s,
			type: 'RestOfOperations',
			valueBuy: 2,
			valueSell: 1,
			fees: 0.1,
			total: 200,
		});

		const id = operation.id;

		const operations = await deleteOperationUseCase.execute({id});

		expect(operations.length).toBe(1);


	});



});