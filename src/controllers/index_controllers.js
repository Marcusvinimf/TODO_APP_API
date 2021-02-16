module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send('<center><br>Autor: <strong>Marcus Vinicius Marinho Ferreira.</strong><h2>Agora coloque como parametro:</h2><h4>Clique aqui ==> <a href="https://todoappapi-project.herokuapp.com/usuarios">Banco de dados de usuarios</a>, para acessar o banco de dados de usuarios.</h4><h4>Clique aqui ==> <a href="https://todoappapi-project.herokuapp.com/tarefas">Banco de dados de tarefas</a>, para acessar o banco de dados de tarefas.</h4> <br><img height="500" src="http://images7.memedroid.com/images/UPLOADED176/560f05bde09fb.jpeg"></center>');
    });
};