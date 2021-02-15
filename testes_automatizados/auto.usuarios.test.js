const request = require('supertest');

test('Rota GET de Usuarios com parametro', async ()=>
{
    await request("http://localhost:8080")
    .get('/usuarios/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de Usuarios completa', async ()=>
{
    await request("http://localhost:8080")
    .get('/usuarios')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de Usuarios', async ()=>
{
    await request("http://localhost:8080")
    .post('/usuarios')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota DELETE de Usuarios', async ()=>
{
    await request("http://localhost:8080")
    .delete('/usuarios/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de Usuarios', async ()=>
{
    await request("http://localhost:8080")
    .put('/usuarios/:id')
    .expect(200)
    .then( response => ('foi'))
})
    
    