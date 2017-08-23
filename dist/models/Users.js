"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcrypt");
function UsersModel(sequelize, Datatype) {
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
                notEmpty: true
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
            beforeCreate: function (user) {
                var salt = bcrypt.genSaltSync();
                user.set('password', bcrypt.hashSync(user.password, salt));
            }
        },
        classMethods: {
            isPassoword: function (encodedPassword, password) { return bcrypt.compareSync(password, encodedPassword); },
        }
    });
}
exports.default = UsersModel;
//# sourceMappingURL=Users.js.map