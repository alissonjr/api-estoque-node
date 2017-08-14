import { Sequelize, DataTypes } from 'sequelize';

function ProductMoviment(sequelize: Sequelize, Datatype: DataTypes): any {
    return sequelize.define('ProductMoviment', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        price: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0.0
            }
        }
    }, {
        underscored: true
    });
};

export default ProductMoviment;