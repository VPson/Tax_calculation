import express from "express";

const app = express();

app.get("/", (request, response) => {
	response.json({ message: "fala filho da puta"});
});

app.listen(3000, () => console.log("rodando"));


//ts-node dev serve para rodar o servidor normalmente sem criar umas pasta js 