const tar = 'tarefas';

const TarefasDao = require('../DAO/tarefa_dao');

module.exports = (app, bd) => 
{
	const tarefasDao = new TarefasDao(bd);

	app.get(`/${tar}`, (req, res) => 
	{
		listaTarefs();
		async function listaTarefs()
		{
			try{
				const tarefassRetorno = await tarefasDao.listaTarefas();
				res.send(tarefassRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.get(`/${tar}/:id`, (req, res) => 
	{
		unicoTarefs();
		async function unicoTarefs()
		{
			try{
				const tarefassRetorno = await tarefasDao.buscaUnicaTarefas(req.params.id);
				res.status(200).send(tarefassRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.post(`/${tar}`, (req, res) => 
	{
		addTarefs();
		async function addTarefs()
		{
			try{
				const tarefassRetorno = await tarefasDao.adicionaTarefas([req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao, req.body.id_usuario]);
				res.send(tarefassRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.delete(`/${tar}/:id`, (req, res) => 
	{
		deleteTarefs();
		async function deleteTarefs()
		{
			try{
				const tarefassRetorno = await tarefasDao.deletaTarefas(req.params.id);
				res.send(tarefassRetorno);
			}catch{
				res.send(erro);
			}
		}
	});

	app.put(`/${tar}/:id`, (req, res) => 
	{
		const parametro = req.params.id;
		const valuesParametro = [req.body.id, req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao, req.body.id_usuario, req.params.id];

		updateTarefs();
		async function updateTarefs()
		{
			try{
				const tarefassRetorno = await tarefasDao.atualizaTarefas(valuesParametro, parametro);
				res.send(tarefassRetorno);
			}catch{
				res.send(erro);
			}
		}
	});
};