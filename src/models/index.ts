import { DataTypes, Sequelize } from "sequelize";
import Cash from "./CashMoviments";
import Products from "./Product";
import User from "./Users";
import ProdMov from "./ProductMoviment";

export default function (sequelize: Sequelize) {
    
    const Users = User(sequelize, DataTypes);
    const CashMoviments = Cash(sequelize, DataTypes);
    const Product = Products(sequelize, DataTypes);
    const ProductMoviment = ProdMov(sequelize, DataTypes);

    CashMoviments.belongsToMany(Product, {
        through: ProductMoviment,
        foreignKey: 'fk_cash_moviment',
        constraints: false
    });

    Product.belongsToMany(CashMoviments, {
        through: ProductMoviment,
        foreignKey: 'fk_product',
        constraints: false
    });

    return { CashMoviments, Product, Users };
}