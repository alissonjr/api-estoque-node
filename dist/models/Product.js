"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProductModel(sequelize, DataType) {
    return sequelize.define('Products', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
        },
        barCode: {
            type: DataType.STRING,
            allowNull: true,
        }
    });
}
exports.default = ProductModel;
//# sourceMappingURL=Product.js.map