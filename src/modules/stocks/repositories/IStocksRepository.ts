import { IcreateStockDTO } from '../dtos/IcreateStock';

interface IStocksRepository {
	create(data: IcreateStockDTO): Promise<void> ;
}

export { IStocksRepository };