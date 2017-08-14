import { DataTypes, Sequelize } from "sequelize";

const CashMoviments: any = function (sequelize: Sequelize, DataType: DataTypes): any {
	return sequelize.define('CashMoviments', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataType.TEXT
        },
        date: {
            type: DataType.DATE,
            validate: {
                isDate: true
            }
        }
    }, {
        underscored: true
    });
}

export default CashMoviments;