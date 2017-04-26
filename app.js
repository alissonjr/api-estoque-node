'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const product = require('src/product');
// //////////////////////////////

const app = express();

const port = process.env.PORT || 3000;

const string_connect = `mongodb://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;
mongoose.connect(string_connect);

product.log();

// //////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log(`connected as id`);
});

/**
* busca o endereço de determinado cep
* @param {number} product_id - cep informado sem traço
* @return {Object} dados de enderço referente ao cep pesquisado
*/
app.get('/api/full/products/', (req, res) => {
    let query = `SELECT * FROM produtos`;
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results[0]));
    });
});

app.listen(port, () => {
    console.log(`API REST funfando na porta ${port}`);
});
