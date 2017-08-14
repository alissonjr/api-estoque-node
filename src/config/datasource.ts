import { Sequelize } from 'sequelize';
const fs = require('fs');
const path = require('path');
import LoadModels from "../models";

let database = null;

export default function (app) {
    if (!database) {
        const config = app.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        database = {
            sequelize, Sequelize, models: {}
        };

        database.models = LoadModels(sequelize);

        sequelize.sync().then(() => database);
    }
    return database;
};