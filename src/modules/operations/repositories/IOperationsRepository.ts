import { IcreateOperationDTO } from '../dtos/IcreateOperation';

interface IStocksRepository {
	create(data: IcreateOperationDTO): Promise<void> ;
}

export { IStocksRepository };