"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passport_jwt_1 = require("passport-jwt");
exports.default = function (app) {
    var Users = app.datasource.models.Users;
    var opts = {
        secretOrKey: app.config.jwtSecret,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeader()
    };
    var strategy = new passport_jwt_1.Strategy(opts, function (payload, done) {
        Users.findById(payload.id)
            .then(function (user) {
            if (user) {
                return done(null, {
                    id: user.id,
                    email: user.email
                });
            }
            return done(null, false);
        }).catch(function (error) { return done(error, null); });
    });
    passport.use(strategy);
    return {
        initialize: function () { return passport.initialize(); },
        authenticate: function () { return passport.authenticate('jwt', app.config.jwtSecret); }
    };
};
//# sourceMappingURL=auth.js.map