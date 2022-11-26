/*
File: index.js
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
import jwt from 'jsonwebtoken';
import { Secret } from '../../config/config.js';


export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function UserID(req){
    if(req.user){
        return req.user._id;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

export function GenerateToken(user){
    const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        emailAddress: user.EmailAddress
    }

    const jwtOptions = {
        expiresIn: 604800 // 1 week
    }

    return jwt.sign(payload, Secret, jwtOptions);

}