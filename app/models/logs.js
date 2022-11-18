/*
File: logs.js
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

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const logsSchema = new Schema({
    date: String,
    username: String,
    userType: String,
    action: String
}, {
    timestamps: true,
    collection: 'logs'
});

export default mongoose.model('Logs', logsSchema);