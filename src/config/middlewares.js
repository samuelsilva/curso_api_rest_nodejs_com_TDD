// configuração de todos os middlewares que vamos utilizar

const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
}