interface IcreateStockDTO {
	id: string,
	nameStock: string,
	quantity: number,
	dateBuy: Date,
	dateSell: Date,
	valueBuy: number,
	valueSell: number
}

export { IcreateStockDTO };