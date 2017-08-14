import { DataTypes, Sequelize } from "sequelize";

 const Product: any = function (sequelize: Sequelize, DataType: DataTypes): any {
	return sequelize.define('Product', {
		id: {
			type: DataType.INTEGER.UNSIGNED,
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
		description : {
			type: DataType.STRING,
			allowNull: true,
		},
		barCode: {
			type: DataType.STRING,
			allowNull: true,
		}

	}, {
		underscored: true
	});
}

export default Product;