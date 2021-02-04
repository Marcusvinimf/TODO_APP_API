const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usuariosControllers = require('./controllers/usuario_controllers');
const tarefasControllers = require('./controllers/tarefa_controllers');
const bd = require('./infra/sqlite-db');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cors());

usuariosControllers(app, bd);
tarefasControllers(app, bd);

app.listen(port, () => {
    console.log(`Tudo sendo ouvido corretamente, confira: http://localhost:${port}`);
});