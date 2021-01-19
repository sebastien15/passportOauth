const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(
    new GoogleStrategy({
        // opitons ofr the google strategy
        callbackURL: 'http://localhost:3000/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, ()=>{
    //passport call back fnction
    })
)