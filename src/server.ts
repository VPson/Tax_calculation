import express from 'express';

const app = express();

app.get('/', (request, response) => {
	response.json({ message: 'fala filho da puta'});
});

app.listen(3000, () => console.log('rodando'));

// na hora de rodar, tem q dar npm run buil, depois node dist/server.js
//ts-node dev serve para rodar o servidor normalmente sem criar umas pasta js 