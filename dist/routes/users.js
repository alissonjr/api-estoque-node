"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../controllers/users");
exports.default = function (app) {
    var usersController = new users_1.default(app.datasource.models.Users);
    app.route('/users')
        .get(function (req, res) {
        usersController.getAll()
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .post(function (req, res) {
        usersController.create(req.body)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });
    app.route('/users/:id')
        .get(function (req, res) {
        usersController.getById(req.params.id)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .put(function (req, res) {
        usersController.update(req.body, req.params.id)
            .then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    })
        .delete(function (req, res) {
        usersController.delete(req.params.id)
            .then(function (response) {
            res.sendStatus(response.statusCode);
        });
    });
};
//# sourceMappingURL=users.js.map