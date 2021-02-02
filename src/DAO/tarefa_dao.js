module.exports = class TarefasDao
{
    constructor(bd)
    {
        this.bd = bd;
    }

    listaTarefas()
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.all("SELECT * FROM TAREFAS;", (error, linhas )=>
            {
                if(error) reject('erro ao consultar tabela');
                else resolve(linhas);
            })
        })
    }

    buscaUnicaTarefas(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.get("SELECT * FROM TAREFAS WHERE id = ?", parametro,
            (error, linhas)=>
            {
                if(error) reject('erro ao buscar tarefa');
                else resolve(linhas);
            })
        })
    }

    adicionaTarefas(values)
    {
        return new Promise((resolve, reject)=>  
        {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", values,
            (error)=>
            {
                if(error) reject('erro ao adicionar tarefas a tabela');
                else resolve("tarefa adicionado")
            })
        })
    }

    deletaTarefas(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.run("DELETE FROM TAREFAS WHERE id = ?", parametro,
            (error)=>
            {
                if(error) reject('erro ao deletar tabela');
                else resolve(`Tarefa com o id ${parametro} excluída.`);
            })
        })
    }

    atualizaTarefas(valuesParametro, parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.run("UPDATE TAREFAS SET ID = ?, TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE id = ?", valuesParametro,
            (error)=>
            {
                if(error) reject('erro ao atualizar tabela');
                else resolve(`Tarefa com o id ${parametro} atualizado.`);
            })
        })
    }
}