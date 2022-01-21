import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('operations')
class Operation {
	@PrimaryColumn()
	id: string;

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

	constructor() {
		if (!this.id){
			this.id = uuidV4();
		}
	}
}

export { Operation };