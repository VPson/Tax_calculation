import { Column, Entity } from 'typeorm';

@Entity('stocks')
class Stock {
	@Column()
	id: number;

	@Column()
	nameStock: string;

	@Column()
	quantity: number;

	@Column()
	dateBuy: Date;

	@Column()
	dateSell: Date;

	@Column()
	valueBuy: number;

	@Column()
	valueSell: number;

	@Column()
	total: number;
}

export { Stock };