module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send('<center><h1>Agora coloque como parametro:</h1><br> <h3>Digite ==> *usuarios* ou *tarefas* no link do navegador acima, para acessar o banco de dados.</h3> <img src="http://images7.memedroid.com/images/UPLOADED176/560f05bde09fb.jpeg"></center>');
    });
};