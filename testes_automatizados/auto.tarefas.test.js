const request = require('supertest');

test('Rota GET de Tarefas com parametro', async ()=>
{
    await request("http://localhost:8080")
    .get('/tarefas/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de Tarefas completa', async ()=>
{
    await request("http://localhost:8080")
    .get('/tarefas')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de Tarefas', async ()=>
{
    await request("http://localhost:8080")
    .post('/tarefas')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota DELETE de Tarefas', async ()=>
{
    await request("http://localhost:8080")
    .delete('/tarefas/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de Tarefas', async ()=>
{
    await request("http://localhost:8080")
    .put('/tarefas/:id')
    .expect(200)
    .then( response => ('foi'))
})