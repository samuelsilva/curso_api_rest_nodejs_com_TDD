const app = require('express')();
const consign = require('consign');

consign({ cwd: 'src', verbose: false}) // cwd indica diretório padrão - verbose não mostra msg
  .include('./config/middlewares.js')
  .into(app);

app.get('/',(req,res) => {
    res.status(200).send();
});

app.get('/users',(req,res) => {
    const users = [
        {'name':'John Doe', 'mail':'john@mail.com'}
    ];
    res.status(200).json(users);
});

app.post('/users',(req,res) => {
    res.status(201).json(req.body); //o que vier no send deve retornar como resposta no body
})

module.exports = app;