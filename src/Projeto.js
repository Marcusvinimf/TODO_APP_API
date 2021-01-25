const express = require('express');
const bodyParser = require('body-parser');

const usuariosControllers = require('./controllers/usuario_controllers');
const tarefasControllers = require('./controllers/tarefa_controllers');
const dataBase = require('./infra/bd');

const port = 8080;
const app = express();

console.log(dataBase);

app.use(bodyParser.json());

usuariosControllers(app, dataBase);
tarefasControllers(app, dataBase);

app.listen(port, () => {
    console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`);
});