const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * node index.js 
 * 
 *Metodos HTTP:
 *
 * GET: buscar/listar uma informacao no back-end
 * POST: criar uma informacao no back-end
 * PUT: alterar uma informacao no back-end
 * DELETE: deletar uma informacao no back-end
 */
/**
 * Tipos de parametros
 * 
 * Query:parametros nomeados enviados na rota apos o simbulo de interrogacao e geralmente eles servem para filtros e paginacao
 * Route params: parametros utilizados para identificar recursos
 * request body: corpo da requisicao, utilizado para criar ou alterar recursos 
 */
/** 
 * SQL: mySQL, SQLite, Oracle
 * NoSQL:MongoDB, CounchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query builder: table ('users').select('*').where()
 * 
 */




app.listen(3333);



