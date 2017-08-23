"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var jwt = require("jwt-simple");
exports.default = function (app) {
    var config = app.config;
    var Users = app.datasource.models.Users;
    app.post('/token', function (req, res) {
        if (req.body.email && req.body.password) {
            var _a = req.body, email = _a.email, password_1 = _a.password;
            Users.findOne({ where: { email: email } })
                .then(function (user) {
                if (Users.isPassword(user.password, password_1)) {
                    var payload = { id: user.id };
                    res.json({
                        token: jwt.encode(payload, config.jwtSecret, undefined, undefined)
                    });
                }
                else {
                    res.sendStatus(HttpStatus.UNAUTHORIZED);
                }
            }).catch(function () { return res.sendStatus(HttpStatus.UNAUTHORIZED); });
        }
        else {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    });
};
//# sourceMappingURL=auth.js.map