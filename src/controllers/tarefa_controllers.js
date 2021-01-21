const tar = 'tarefas';

const Tarefas = require('../models/tarefas_models')

module.exports = (app, bd )=>{ 
        app.get(`/${tar}`, (req, res) => {
                res.send(bd.tarefas)
        })

        app.get(`/${tar}/:status`, (req, res) =>{

                let resultado = [];

                for(let trf of bd.tarefas)
                {

                        if(trf._status == req.params.status) resultado.push(trf)
                }

                resultado != 0 ? res.send(resultado) : res.send("Tarefa não encontrado");
        })
        
        app.post(`/${tar}`, (req, res) => {
                const taref = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao);
                bd.tarefas.push(taref);
                console.log(bd);
                res.send("OK!!!")
        })
};