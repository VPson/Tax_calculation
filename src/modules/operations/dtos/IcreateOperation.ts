interface IcreateOperationDTO {
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	valueBuy: number,
	valueSell: number,
	type: string,
	fees: number,
	total: number
}

export { IcreateOperationDTO };