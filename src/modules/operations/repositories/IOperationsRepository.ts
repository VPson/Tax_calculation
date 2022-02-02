import { ICreateOperationDTO } from '../dtos/ICreateOperationDTO';
import { Operation } from '../infra/typeorm/entities/Operation';

interface IOperationsRepository {
	create(data: ICreateOperationDTO): Promise<Operation> ;
	findById(id: string): Promise<Operation>
	delete(id: string): Promise<Operation[]>
}

export { IOperationsRepository };