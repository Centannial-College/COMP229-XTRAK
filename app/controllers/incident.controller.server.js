import incidentModel from '../models/incident.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayIncidentList(req, res, next){
    incidentModel.find(function(err, incidentCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Incident List', page: 'incident/list', incident: incidentCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayIncidentAddPage(req, res, next){
    res.render('index', { title: 'Add Incident', page: 'incident/edit', incident: {}, displayName: UserDisplayName(req) });
}

export function ProcessIncidentAddPage(req, res, next){
    
    let newIncident = incidentModel({
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

export function DisplayIncidentEditPage(req, res, next){
    let id = req.params.id;

    incidentModel.findById(id, (err, incident) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Incident', page: 'incident/edit', incident: incident, displayName: UserDisplayName(req) });
    });    
}

export function ProcessIncidentEditPage(req, res, next){

    let id = req.params.id;
    
    let newIncident = incidentModel({
        _id: req.body.id,
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

