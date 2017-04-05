'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

let array_test = [
  {
    id: 1,
    name: "Produto 1"
  },
  {
    id:2,
    name: "Produto 2"
  },
  {
    id:3,
    name: "Produto 3"
  },
  {
    id:4,
    name: "Produto 4"
  },
  {
    id:5,
    name: "Produto 5"
  },
  {
    id:6,
    name: "Produto 6"
  },
  {
    id:7,
    name: "Produto 7"
  },
  {
    id:8,
    name: "Produto 8"
  },
  {
    id:9,
    name: "Produto 9"
  },
  {
    id:10,
    name: "Produto 10"
  }
];

const Produto = function Produto(produto) {
  this.id = produto.id || "";
  this.name = produto.name || "";
  // -------------
  this.getId = () => this.id;
  this.getName = () => this.name;
  // -------------
  let message = {}, error = false;
  this.validaProduto = () => {
    if (!this.getId()) {
      error = true;
      message.id = "campo ausente";
    }
    if (!this.getName()) {
      error = true;
      message.name = "campo ausente";
    }
    if (error === true) {
      return message;
    } else {
      return {success: "valid"}
    }
  }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/produtos', (req, res) => {
  res.status(200).send(array_test);
});

app.get('/api/produtos/:id', (req, res) => {
  let searched_id = req.params.id;
  let produto = array_test.filter((element) => {
    return element.id == searched_id;
  })[0];
  if (produto === undefined) {
    res.status(404).send({
      error: `produto com o id ${searched_id} não encontrado!`
    });
  } else {
    res.status(200).send(produto);
  }
});

app.post('/api/produtos', (req, res) => {
  let mensage = {},
      produto = new Produto(req.body),
      validate_product = produto.validaProduto();

  if (validate_product.success) {
    array_test.push({
      id: produto.getId(),
      name: produto.getName()
    });
    res.status(200).send({
      success: "produto cadastrado com sucesso!"
    });
  } else {
    res.status(412).send(validate_product);
  }

});

app.put('/api/produtos/:id', (req, res) => {

});

app.delete('/api/produtos/:id', (req, res) => {

});

app.listen(port, () => {
  console.log(`API REST funfando na porta ${port}`);
});
