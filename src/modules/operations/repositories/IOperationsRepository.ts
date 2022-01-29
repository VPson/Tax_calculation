import { IcreateOperationDTO } from '../dtos/IcreateOperation';
import { Operation } from '../infra/typeorm/entities/Operation';

interface IOperationsRepository {
	create(data: IcreateOperationDTO): Promise<Operation> ;
}

export { IOperationsRepository };