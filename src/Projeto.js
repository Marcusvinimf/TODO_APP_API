const express = require('express');

const tarefasControllers = require('./controllers/tarefa_controllers');
const usuarioControllers = require('./controllers/usuario_controllers');

const port = 8080;
const app = express();

tarefasControllers(app)
usuarioControllers(app)

app.listen(port, () => {
    console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`)
})