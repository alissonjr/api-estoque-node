const connection = require('../config/config');

exports.getAll = (req, res, next) => {
    try {
      connection.query('SELECT * FROM produtos', [], (err,result) => {
        if (err) return err;
        res.end(JSON.stringify(result[0]));
      });
    } catch (e) {
      return e;
      res.end(e);
    }
}

exports.get = (req, res, next) => {
    res.send({
      teste: "Testando essa merda!",
      id_param: parseInt(req.params.product)
    }).json();
}
