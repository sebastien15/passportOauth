const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(new GoogleStrategy({
    // opitons ofr the google strategy
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}), ()=>{
    //passport call back fnction
})