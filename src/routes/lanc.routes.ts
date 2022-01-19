import { Router } from 'express';

const router =Router();

router.get('/', (requeste, response) => {
	response.json({ message: 'fala filho da puta'});
});

export { router }; 