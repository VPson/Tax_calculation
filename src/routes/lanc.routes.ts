import { Router } from 'express';

const router =Router();

router.get('/', (requeste, response) => {
	response.json({ message: 'fala filho da puta'});
});

router.post('./create');
router.post('./delete');

export { router }; 