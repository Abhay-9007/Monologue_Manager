// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// import passport from "passport"
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { userModel as User }  from "../models/user.model.js" 
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/user.model.js")


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, cb) => {
        try{
            let user = await User.findOneAndUpdate({ googleId: profile.id }) //, {isLoggedIn : true})
            if (!user){
                user = await User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    email : profile.emails[0].value,
                    avater : profile.photos[0].value
                })
            }
            return cb(null, user)
        }catch(err){
            return cb(err, null)
        }
        
    }
));
