const tar = 'tarefas';

module.exports = (app)=>{ app.get(`/${tar}`, (req, res) => {
                res.send(`Rota ativada com GET e recurso ${tar}: valores de ${tar} devem ser retornados`)
        })
};

module.exports = (app)=>{ app.post(`/${tar}`, (req, res) => {
                res.send(`Rota POST de ${tar} ativada: ${tar} adicionado ao banco de dados`)
        })
};