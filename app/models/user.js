/*
File: user.js
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

import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String,
    firstName: String,
    lastName: String,
    userType: String
},{
    timestamps:true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);
