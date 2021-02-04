const usu = 'usuarios';

const UsuariosDao = require('../DAO/usuario_dao');

module.exports = (app, bd) => 
{
	const usuariosDao = new UsuariosDao(bd);

	app.get(`/${usu}`, async (req, res) => 
	{
		try{
			const usuariosRetorno = await usuariosDao.listaUsuarios();
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.get(`/${usu}/:id`, async (req, res) => 
	{
		try{
			const usuariosRetorno = await usuariosDao.buscaUnicaUsuarios(req.params.id);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.post(`/${usu}`, async (req, res) => 
	{
		try{
			const usuariosRetorno = await usuariosDao.adicionaUsuarios([req.body.nome, req.body.email, req.body.senha]);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.delete(`/${usu}/:id`, async (req, res) => 
	{
		try{
			const usuariosRetorno = await usuariosDao.deletaUsuarios(req.params.id);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});

	app.put(`/${usu}/:id`, async (req, res) => 
	{
		const parametro = req.params.id;
		const valuesParametro = [req.body.id, req.body.nome, req.body.email, req.body.senha, req.params.id];

		try{
			const usuariosRetorno = await usuariosDao.atualizaUsuarios(valuesParametro, parametro);
			res.status(200).send(usuariosRetorno);
		}catch(erro){
			res.send(erro);
		}
	});
};