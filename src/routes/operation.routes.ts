import { Router } from 'express';

const operation = Router();

operation.get('/', (requeste, response) => {
	// find operations
	response.json({ message: 'fala filho da puta'});
});

operation.post('./create', (req, res) =>{
	//create and save operations
	return res.send('criado');
});

operation.delete('./stock/:id', (req, res) => {
	// find and delete operations
	res.send('deletado');
});

export { operation }; 