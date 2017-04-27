'use strict';
// requirements
const express    = require('express');
const app        = require('./config/config');
const products   = require('./routes/products');
const bodyParser = require('body-parser');
const env        = require('dotenv').config();

// //////////////////////////////
const port = process.env.PORT || 3000;

// //////////////////////////////
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// const product_test = new Product("suco", 1.6);
// product_test.get();
// //////////////////////////////
/**
* busca o endereço de determinado cep
* @param {number} product_id - cep informado sem traço
* @return {Object} dados de enderço referente ao cep pesquisado
*/
// app.get('/api/full/products/', (req, res) => {
//     let query = `SELECT * FROM produtos`;
//     connection.query(query, function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results[0]));
//     });
// });

app.use('/api/products', products);

/* GET home page. */

app.listen(port, () => {
    console.log(`API REST funfando na porta ${port}`);
});
