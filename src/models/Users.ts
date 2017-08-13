const bcrypt = require('bcrypt');
import { Sequelize, DataTypes } from 'sequelize';

export default function (sequelize: Sequelize, Datatype: DataTypes): any {
    return sequelize.define('Users', {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: {
                    msg: "email needs to be valid"
                }
            }
        },
        password: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.set('password', bcrypt.hashSync(user.password, salt));
            }
        },
        classMethods: {
            isPassoword: (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword)
        }
    });
}