<h1>TODO_app_API</h1>

Aplicativo de gerenciamento de tempo proposto pelo Resilia.

<h2> Como instalar as dependências do projeto; </h2>

Comece com o comando <strong>npm install</strong> para baixar todas as dependências do projeto e depois utilize o comando <strong>npm start</strong> para a api ficar ativa no servidor.

<h2>Como executar o projeto;</h2>

Depois de ativar o servidor, acesse: <a><strong>http://localhost:8080</strong></a> e la tem as instruções para os acessos aos objetos <strong>usuarios</strong> e <strong>tarefas</strong>.

<h2>Rotas presentes;</h2> 
  
<strong>Verbos HTTP REST:</strong> GET, POST, DELETE E PUT.
  
 <h4>Para Usuarios:</h4>
  
<strong>Rota para buscar todos os usuarios:<strong> GET <a>http://localhost:8080/usuarios</a>
  
<strong>Rota para buscar 1 usuario atravês do seu id(chave primaria):<strong> GET <a>http://localhost:8080/usuarios/id</a>
  
<strong>Rota para inserir 1 novo usuario:<strong> POST <a>http://localhost:8080/usuarios</a>
  
<strong>Rota para deletar 1 usuario atravês do seu id(chave primaria):<strong> DELETE <a>http://localhost:8080/usuarios/id</a>
  
<strong>Rota para atualizar os dados de 1 usuario atravês do seu id(chave primaria):<strong> PUT <a>http://localhost:8080/usuarios/id</a>
  
  <h4>Para Tarefas:</h4>
  
<strong>Rota para buscar todas as tarefas:<strong> GET <a>http://localhost:8080/tarefas</a>
  
<strong>Rota para buscar 1 tarefa atravês do seu id(chave primaria):<strong> GET <a>http://localhost:8080/tarefas/id</a>
  
<strong>Rota para inserir 1 nova tarefa:<strong> POST <a>http://localhost:8080/tarefas</a>
  
<strong>Rota para deletar 1 tarefa atravês do seu id(chave primaria):<strong> DELETE <a>http://localhost:8080/tarefas/id</a>
  
<strong>Rota para atualizar os dados de 1 tarefa atravês do seu id(chave primaria):<strong> PUT <a>http://localhost:8080/tarefas/id</a>
  
