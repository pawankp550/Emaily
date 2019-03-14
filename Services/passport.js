const passport = require('passport');
const googleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const user = mongoose.model('users');

passport.serializeUser((user, done) =>
{
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id)
    .then(user => {
        done(null,user)
    });
});

passport.use(
    new googleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientsecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await user.findOne({googleId : profile.id})

                    if(existingUser){
                        done(null, existingUser);
                    }
                    else{
                          new user({ googleId : profile.id})
                          .save()
                          .then( user => {done(null, user)
                          });
                    }

            }
    )
);