const usu = 'usuarios';

// verbo get 
module.exports = (app)=>{ app.get(`/${usu}`, (req, res) => {
                res.send(`Rota ativada com GET e recurso ${usu}: valores de ${usu} devem ser retornados`)
        });
                app.post(`/${usu}`, (req, res) => {
                res.send(`Rota POST de ${usu} ativada: ${usu} adicionado ao banco de dados`)
        })
};