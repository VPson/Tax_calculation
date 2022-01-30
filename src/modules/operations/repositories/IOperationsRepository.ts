import { ICreateOperationDTO } from '../dtos/ICreateOperationDTO';
import { Operation } from '../infra/typeorm/entities/Operation';

interface IOperationsRepository {
	create(data: ICreateOperationDTO): Promise<Operation> ;
}

export { IOperationsRepository };