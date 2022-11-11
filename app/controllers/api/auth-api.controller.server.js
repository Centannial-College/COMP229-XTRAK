/*
File: auth-api.controller.server.js
Date: 10.11.2022

NAME: xTrak - Incident Reporting
Description: xTrak is a web app platform to capture data for incident. The reports are saved and organized in a list. 

---- DEVELOPERS ----
Tim Upton – 301259058 
Pedro Da Silva Dergado – 301239283 
Alex Damovski – 301192233 
Tyler Mercier – STUDENT NUM 
Danill Velykyi - 301183618
Cathy Da - 301177731 
*/

import passport from 'passport';
import userModel from '../../models/user.js';
import { GenerateToken } from '../../utils/index.js';

export function processLogin(req, res, next){
    passport.authenticate('local', (err, user, info) => {
        // are there any server errors?
        if(err){
            console.error(err);
            res.end(err);
        }

        // are there any login errors?
        if(!user){
            return res.json({success: false, msg: 'ERROR: Authentication Failed'});
        }

        // no problems -  we have a good username and password
        req.logIn(user, (err) => {
            // are there any db errors?
            if (err){
                console.error(err);
                res.end(err);
            }

            const authToken = GenerateToken(user);

            return res.json({
                success: true,
                msg: 'User Logged In Successfully',
                user: {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    emailAddress: user.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userType: user.userType
                },
                token: authToken
            })
        })
    })(req, res, next);
}

export function processRegistration(req, res, next){
    // instantiate a new user object
    let newUser = new userModel({
        ...req.body //javascript destructing
    });

    userModel.register(newUser, req.body.password, (err) => {
        // errorr validations
        if(err){
            if(err.name === 'UserExistsError'){
                console.error('ERROR: User Already Exists!')
            }

            console.log(err);

            return res.json({success: false, msg: 'ERROR: Registration Failed!'})
        }

        // all ok - user has been registered
        return res.json({success: true, msg: 'User Registered Successfully'});
    })
}

export function processLogout(req, res, next){
    req.logOut((err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log('User Logged Out');
    });

    res.json({success: true, msg: 'User logged out successfully'});
} 