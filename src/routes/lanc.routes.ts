import { Router } from 'express';

const router = Router();

router.get('/', (requeste, response) => {
	// buscar itens
	response.json({ message: 'fala filho da puta'});
});

router.post('./create', (req, res) =>{
	//criar e salvar um item
	return res.send('criado');
});

router.delete('./stock/:id', (req, res) => {
	// buscar e deletar um item
	res.send('deletado');
});

export { router }; 