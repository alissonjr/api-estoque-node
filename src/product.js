// const module = require('module');
class Product {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    logName() {
        console.log(`The product's name is: ${this.name}`);
    }

    get(req, res, next) {
        req.getConnection((err,connection) => {
            if (err) return err;
            connection.query('SELECT * FROM produtos', [], (err,result) => {
                if (err) return err;
                res.end(JSON.stringify(result[0]));
            });
        });
    }
};

module.exports = Product;
