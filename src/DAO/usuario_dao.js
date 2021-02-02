module.exports = class UsuariosDao 
{
    constructor(bd)
    {
        this.bd = bd;
    }

    listaUsuarios()
    {
        return new Promise((resolve, reject)=>  
        {
            this.bd.all("SELECT * FROM USUARIOS;", (error, linhas )=>
            {
                if(error) reject('erro ao consultar tabela');
                else resolve(linhas);
            })
        })
    }

    buscaUnicaUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.get("SELECT * FROM USUARIOS WHERE id = ?", parametro,
            (error, linhas)=>
            {
                if(error) reject('erro ao buscar usuario');
                else resolve(linhas);
            })
        })
    }

    adicionaUsuarios(values)
    {
        return new Promise((resolve, reject)=>  
        {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", values,
            (error)=>
            {
                if(error) reject('erro ao adicionar usuarios a tabela');
                else resolve("usuarios adicionado")
            })
        })
    }

    deletaUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.run("DELETE FROM USUARIOS WHERE id = ?", parametro,
            (error)=>
            {
                if(error) reject('erro ao deletar tabela');
                else resolve(`Usuário com o id ${parametro} excluído.`);
            })
        })
    }

    atualizaUsuarios(valuesParametro, parametro)
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.run("UPDATE USUARIOS SET ID = ?, NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?", valuesParametro,
            (error)=>
            {
                if(error) reject('erro ao atualizar tabela');
                else resolve(`Usuário com o id ${parametro} atualizado.`);
            })
        })
    }
}