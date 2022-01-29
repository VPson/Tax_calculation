import { User } from '@modules/users/infra/typeorm/entities/User';

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

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
	fees: number;

	@Column()
	total: number;

	@Column()
	type: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column()
	user_id: string;

	constructor() {
		if (!this.id){
			this.id = uuidV4();
		}
	}
}

export { Operation };