'use strict';
// requirements
const config     = require('./config/config');
// const products_route = require('./routes/products');
const Product = require('./src/product');
const express = require('express');

// //////////////////////////////
const port = process.env.PORT || 3000;

const product = new Product();
// //////////////////////////////
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

/* GET home page. */
config.get('/api/lembretes', product.get);
config.listen(port, () => {
    console.log(`API REST funfando na porta ${port}`);
});
