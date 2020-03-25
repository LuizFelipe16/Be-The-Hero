const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
Rotas: o caminho que a aplicação vai ter na url
Recursos: o que vai utilizar por exemplo uma lista de users
*/

/**
 * GET: Buscar uma informação do Backend (Ex: quando peesquisa algo no google)
 * POST: Criar uma informação no Backend
 * PUT: Alterar uma informação no Backend
 * DELETE: Deletar uma informação no Backend
 */

/**
 * Tipoa de parâmetros
 * 
 * Query: parâmetros nomeados que são enviados na rota após o "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição usado para criar ou alterar recursos
 */

/**
 * SQL: MySql, SQLite // SQL é uma linguagem
 * NoSQL: MongoDB, CouchDB
 * Diferença dele está no SQL ser mais estavel e estruturado do que o NoSQL, melhor para o mercado
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*')
  */

app.listen(3333);

