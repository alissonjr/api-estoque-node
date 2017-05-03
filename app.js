'use strict';
// //////////////////////////////
// requirements
const express    = require('express');
// const mysql      = require('mysql');
// const connection = require('express-myconnection');
const products   = require('./routes/products');
const bodyParser = require('body-parser');
const env        = require('dotenv').config();


// const config_1 = {
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   // port: process.env.PORT, //port mysql
//   database: process.env.DB
// };
//
// const config_2 = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "loja_teste"
// };
// const connection = mysql.createConnection(config_1);
// //////////////////////////////
// instances
const app  = express();
const port = process.env.PORT || 3000;
// console.log(process.env);

// //////////////////////////////
// conection
// app.use(
//   connection(mysql, {
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     port: process.env.PORT, //port mysql
//     database: process.env.DB
//   }, 'request')
// );
// //////////////////////////////
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.Router());
// const product_test = new Product("suco", 1.6);
// product_test.get();
// //////////////////////////////
app.use('/api/products', products);

/* GET home page. */

app.listen(port, () => {
    console.log(`API REST funfando na porta ${port}`);
});
