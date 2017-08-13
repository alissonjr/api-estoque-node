const passport = require('passport');
import { Strategy, ExtractJwt } from "passport-jwt";

export default function(app) {
    const Users: any = app.datasource.models.Users;
    const opts: any = {
        secretOrKey: app.config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };
    
    const strategy = new Strategy(opts, (payload, done) => {
        Users.findById(payload.id)
            .then(user => {
                if(user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            }).catch(error => done(error, null));
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', app.config.jwtSecret)
    }
}