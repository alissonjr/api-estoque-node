'use strict';
// requirements
const env        = require('dotenv').config();
const mysql      = require('mysql');
const config_1 = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  // port: process.env.PORT, //port mysql
  database: process.env.DB
};

const config_2 = {
  host: "localhost",
  user: "root",
  password: "",
  database: "loja_teste"
};
const connection = mysql.createConnection(config_1);
// //////////////////////////////
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
// //////////////////////////////
const config = connection;
// //////////////////////////////
module.exports = config;
