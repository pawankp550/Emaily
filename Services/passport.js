const passport = require('passport');
const googleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const user = mongoose.model('users');

passport.use(
    new googleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientsecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            new user({ googleId : profile.id}).save();
        }
    )
);