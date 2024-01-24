const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');
const { query } = require('express');
//const knexLogger = require('knex-logger');

// TODO Criar chaveamento dinâmico
app.db = knex(knexfile.test);

//app.use(knexLogger(app.db));

consign({ cwd: 'src', verbose: false}) // cwd indica diretório padrão - verbose não mostra msg
  .include('./config/middlewares.js')
  .then('/services')
  .then('./routes') //incluindo a pasta de rotas
  .then('./config/routes.js') // e as configurações das rotas
  .into(app);

app.get('/',(req,res) => {
    res.status(200).send();
});

// FORMA DE LOG SEM UTILIZAR O knex-knexLogger
app.db.on('query', (query) => {
  console.log({sql: query.sql, bindings: query.bindings ? query.bindings.join(','):''});
})
  .on('query-response', (response) => console.log(response))
  .on('error', error => console.log(error));


module.exports = app;