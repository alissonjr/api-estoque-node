import { Sequelize } from 'sequelize';
const fs = require('fs');
const path = require('path');

let database = null;

const loadModels: any = function (sequelize: Sequelize): any {
    // Pega a pasta onde estão os modelos
    const dir: string = path.join(__dirname, '../models');
    // Cria um array para os modelos
    let models: any[] = [];
    fs.readdirSync(dir).forEach(file => {
        /**
         * Verifica a extensão do arquivo
         * Valida se são apenas arquivos '.js'
         */
        if(file.split('.')[file.split('.').length -1] == 'js') {
            // Pega o caminho do arquivo
            const modelDir: string = path.join(dir, file);
            // Importa o modelo
            const model: any = sequelize.import(modelDir);
            // Atribui no array de modelos
            models[model.name] = model;
        }
    });
    return models;
};

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

        database.models = loadModels(sequelize);

        sequelize.sync().then(() => database);
    }
    return database;
};