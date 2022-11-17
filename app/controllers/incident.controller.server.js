/*
File: incident.controller.server.js
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

import incidentModel from '../models/incident.js';

import { UserDisplayName } from '../utils/index.js';

import { UserID } from '../utils/index.js';

//gets all incidents in database
export function DisplayIncidentList(req, res, next){
    incidentModel.find(function(err, incidentCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Incident List', page: 'incident/list', incident: incidentCollection, userID: UserID(req), user: req.user, displayName: UserDisplayName(req)});
    })
}

//displays page to add new item to database
export function DisplayIncidentAddPage(req, res, next){
    res.render('index', { title: 'Add Incident', page: 'incident/edit', incident: {}, userID: UserID(req), displayName: UserDisplayName(req) });
}

    let currentDate = new Date();
    let day = currentDate.getDate().toString();
    let month = (currentDate.getMonth() + 1).toString();
    let year = currentDate.getFullYear().toString();
    let newTicketNumber = day + month + year + "-00000";

//process information to the database
export function ProcessIncidentAddPage(req, res, next){
    
    let newIncident = incidentModel({
        incidentTitle: req.body.incidentTitle,
        incidentStatus: "New",
        incidentNarrative: req.body.incidentNarrative,
        recordNumber: newTicketNumber,
        description: req.body.description,
        priority: req.body.priority,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber
    });

    incidentModel.create(newIncident, (err, Incident) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/incident-list')
    } )
}

//edit current item in database with the id 
export function DisplayIncidentEditPage(req, res, next){
    let id = req.params.id;

    incidentModel.findById(id, (err, incident) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Incident', page: 'incident/edit', incident: incident, userID: UserID(req), displayName: UserDisplayName(req) });
    });    
}

//processes the information from the edit page
export function ProcessIncidentEditPage(req, res, next){

    let id = req.params.id;
    
    let newIncident = incidentModel({
        _id: req.body.id,
        incidentTitle: req.body.incidentTitle,
        incidentStatus: req.body.incidentStatus,
        incidentNarrative: req.body.incidentNarrative,
        description: req.body.description,
        priority: req.body.priority,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber
    });

    incidentModel.updateOne({_id: id }, newIncident, (err, Incident) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/incident-list')
    } )
}


//edit current item in database with the id 
export function DisplayIncidentViewPage(req, res, next){
    let id = req.params.id;

    incidentModel.findById(id, (err, incident) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'View Incident', page: 'incident/view', incident: incident, userID: UserID(req), displayName: UserDisplayName(req) });
    });    
}

//processes deletion of item in database
export function ProcessIncidentDelete(req, res, next){
    let id = req.params.id;

    incidentModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/incident-list');
    })
}

