interface IcreateOperationDTO {
	id: string,
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	valueBuy: number,
	valueSell: number,
	total: number
}

export { IcreateOperationDTO };