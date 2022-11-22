/*
File: logs.controller.server.js
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

import logsModel from '../models/logs.js';

// import DisplayName and UserID Utility method
import { UserDisplayName, UserID} from '../utils/index.js';


//gets all incidents in database
export function LogsIncidentList(req, res, next){
    logsModel.find(function(err, logsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Logs List', page: 'logs', logs: logsCollection, userID: UserID(req), user: req.user, displayName: UserDisplayName(req)});
    })
}

