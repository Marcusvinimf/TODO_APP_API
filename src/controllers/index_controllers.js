module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send('<center><br>Autor: <strong>Marcus Vinicius Marinho Ferreira.</strong><h2>Agora coloque como parametro:</h2><h4>Digite ==> */usuarios* no link do navegador acima, para acessar o banco de dados de usuarios.</h4><h4>Digite ==> */tarefas* no link do navegador acima, para acessar o banco de dados de tarefas.</h4> <br><img height="500" src="http://images7.memedroid.com/images/UPLOADED176/560f05bde09fb.jpeg"></center>');
    });
};