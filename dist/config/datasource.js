"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var fs = require("fs");
var path = require("path");
var database = null;
var loadModels = function (sequelize) {
    var dir = path.join(__dirname, '../models');
    var models = [];
    fs.readdirSync(dir).forEach(function (file) {
        var modelDir = path.join(dir, file);
        var model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    return models;
};
function default_1(app) {
    if (!database) {
        var config = app.config;
        var sequelize = new Sequelize(config.database, config.username, config.password, config.params);
        database = {
            sequelize: sequelize, Sequelize: Sequelize, models: {}
        };
        database.models = loadModels(sequelize);
        sequelize.sync().done(function () { return database; });
    }
    return database;
}
exports.default = default_1;
//# sourceMappingURL=datasource.js.map