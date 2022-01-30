interface ICreateOperationDTO {
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	valueBuy: number,
	valueSell: number,
	type: string,
	fees: number,
	total: number,
	user_id?: string
}

export { ICreateOperationDTO };