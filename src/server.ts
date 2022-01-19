import express,{Response, Request} from 'express'

const app = express()

app.use(express.json())

app.get('/', (Request, Response)=>{
	Response.send("fala filho da puta")
})

app.listen(3000, () => console.log('Rodando'))