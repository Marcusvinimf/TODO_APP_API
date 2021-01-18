const express = require('express');
const bodyParser = require('body-parser')

const tarefasControllers = require('./controllers/tarefa_controllers');
const usuarioControllers = require('./controllers/usuario_controllers');

const port = 8080;
const app = express();

app.use(bodyParser.json());

tarefasControllers(app);
usuarioControllers(app);

app.listen(port, () => {
    console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`)
})