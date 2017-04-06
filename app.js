'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// //////////////////////////////

const app = express();

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host     : '192.168.0.130',
  database : 'cep',
  user     : 'root',
  password : ''
});

// //////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

/**
* busca o endereço de determinado cep
* @param {number} cep - cep informado sem traço
* @return {Object} dados de enderço referente ao cep pesquisado
*/
app.get('/api/full/:cep', (req, res) => {
  connection.query('SELECT * FROM cepbr_endereco ce INNER JOIN cepbr_cidade cc ON ce.id_cidade = cc.id_cidade WHERE ce.cep = ?', [req.params.cep], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results[0]));
  });
});

app.listen(port, () => {
  console.log(`API REST funfando na porta ${port}`);
});
