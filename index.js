import Express from "express";
import router from './route/rng.router.js'

const app = Express();

app.use('/', router)

app.listen(25565, () => console.log('Servidor iniciado na porta 25565'));