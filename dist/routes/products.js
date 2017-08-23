"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../controllers/products");
exports.default = function (app) {
    var productsController = new products_1.default(app.datasource.models.Products);
    app.route('/products')
        .get(function (req, res) {
        productsController.getAll()
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .post(function (req, res) {
        productsController.create(req.body)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });
    app.route('/products/:id')
        .get(function (req, res) {
        productsController.getById(req.params.id)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .put(function (req, res) {
        productsController.update(req.body, req.params.id)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .delete(function (req, res) {
        productsController.delete(req.params.id)
            .then(function (response) {
            res.sendStatus(response.statusCode);
        });
    });
};
//# sourceMappingURL=products.js.map