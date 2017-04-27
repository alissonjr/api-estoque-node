// const module = require('module');
class Product {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  logName() {
    console.log(`The product's name is: ${this.name}`);
  }

  get(req, res) {
    req.getConnection((err,connection) => {
      connection.query('SELECT * FROM produtos',[],(err,result) => {
        if (error) throw error;
        res.end(JSON.stringify(result[0]));
      });
    });
  }

};

module.exports = Product;
