'use strict';
// requirements
const express    = require('express');
const bodyParser = require('body-parser');
const env        = require('dotenv').config();
const mysql      = require('mysql');
const connection = require('express-myconnection');
// //////////////////////////////
// instances
const app  = express();
const port = process.env.PORT || 3000;
// //////////////////////////////
app.use(
  connection(mysql, {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT, //port mysql
    database: process.env.DB
  },'request')
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// //////////////////////////////

// //////////////////////////////
const config = app;
// //////////////////////////////
module.exports = config;
