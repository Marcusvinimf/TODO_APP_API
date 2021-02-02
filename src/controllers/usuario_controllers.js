const usu = 'usuarios';

const UsuariosDao = require('../DAO/usuario_dao');

module.exports = (app, bd) => 
{
	const usuariosDao = new UsuariosDao(bd);

	app.get(`/${usu}`, (req, res) => 
	{
		listaUser();
		async function listaUser()
		{
			try{
				const usuariosRetorno = await usuariosDao.listaUsuarios();
				res.status(200).send(usuariosRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.get(`/${usu}/:id`, (req, res) => 
	{
		unicoUser();
		async function unicoUser()
		{
			try{
				const usuariosRetorno = await usuariosDao.buscaUnicaUsuarios(req.params.id);
				res.status(200).send(usuariosRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.post(`/${usu}`, (req, res) => 
	{
		addUser();
		async function addUser()
		{
			try{
				const usuariosRetorno = await usuariosDao.adicionaUsuarios([req.body.nome, req.body.email, req.body.senha]);
				res.status(200).send(usuariosRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.delete(`/${usu}/:id`, (req, res) => 
	{
		deleteUser();
		async function deleteUser()
		{
			try{
				const usuariosRetorno = await usuariosDao.deletaUsuarios(req.params.id);
				res.status(200).send(usuariosRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.put(`/${usu}/:id`, (req, res) => 
	{
		const parametro = req.params.id;
		const valuesParametro = [req.body.id, req.body.nome, req.body.email, req.body.senha, req.params.id];

		updateUser();
		async function updateUser()
		{
			try{
				const usuariosRetorno = await usuariosDao.atualizaUsuarios(valuesParametro, parametro);
				res.status(200).send(usuariosRetorno);
			}catch{
				res.send(erro);
			}
		}
	});
};