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
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            user.findOne({googleId : profile.id}).then(
                (existingUser) => {
                    if(existingUser){
                        done(null, existingUser);
                    }
                    else{
                          new user({ googleId : profile.id})
                          .save()
                          .then(
                              user => {done(null, user)}
                          );
                    }
                }
            )}
    )
);