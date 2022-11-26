/*
File: profile.controller.server.js
Date: 25.11.2022

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
import express from 'express';

// need passport 
import passport from 'passport';

// need to include the User Model for authentication
import User from '../models/user.js';

// import DisplayName Utility method
import { UserDisplayName, UserID } from '../utils/index.js';

export function displayProfilePage(req, res, next){
    res.render('index', { title: 'Profile', page: 'profile', user: req.user, messages: req.flash('confirmationMessage'), userID: UserID(req), displayName: UserDisplayName(req)} );
};

export function processProfilePage(req, res, next){
    let id = req.params.id;

    let newUser = User({
        _id: req.body.id,
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName,
        userType: req.body.userType,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    User.updateOne({_id: id}, newUser, (err, user) =>{
        if(err){
            console.error(err);
            res.end(err);
        };
        req.flash('confirmationMessage', 'Saved!');
        res.redirect('back');
    });
};

export function processProfileDelete(req, res, next){
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/login');
    });
}