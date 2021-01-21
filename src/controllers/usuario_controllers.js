const usu = 'usuarios';

const Usuarios = require('../models/usuarios_models');

module.exports = (app, bd )=>{ 
        app.get(`/${usu}`, (req, res) => {
                res.send(bd.usuarios);
        })

        app.get(`/${usu}/:email`, (req, res) =>{

                let resultado = [];

                for(let usr of bd.usuarios)
                {

                        if(usr._email == req.params.email) resultado.push(usr);
                }

                resultado != 0 ? res.send(resultado) : res.send("Usuario não encontrado");
        })
        
        app.post(`/${usu}`, (req, res) => {
                const user = new Usuarios(req.body.nome, req.body.email, req.body.senha);
                bd.usuarios.push(user);
                console.log(bd);
                res.send("OK!!!");
        })

};