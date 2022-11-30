/*
File: logs.js
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

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const countersSchema = new Schema({
    _id: {
        db: String,
        coll: String
    },
    incidentId: Number,
}, {
    collection: 'counters'
});

export default mongoose.model('Counters', countersSchema);